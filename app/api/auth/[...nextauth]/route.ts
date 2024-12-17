import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      httpOptions: {
        timeout: 10000, // 10 seconds instead of default 3500ms
      },
    }),
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        try {
          await prisma.$connect();

          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const newUser = await prisma.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
              },
            });
            return {
              id: newUser!.id.toString(),
              email: newUser!.email,
              name: "",
            };
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordValid) {
            console.error("Invalid password.");
            return null;
          }
          return {
            id: user!.id.toString(),
            email: user!.email,
            name: user.email.split("@")[0],
          };
        } catch (error) {
          console.error("Error during authorization: ", error);
          return null;
        } finally {
          await prisma.$disconnect();
        }
      },
    }),
  ],
  // debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account!.provider === "google" && user) {
        try {
          // Check if the user already exists in the database
          let existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            // Create a new user if not found
            const hashedPassword = await bcrypt.hash(user.id, 10);
            existingUser = await prisma.user.create({
              data: {
                email: user.email,
                password: hashedPassword,
              },
            });
          }

          return true;
        } catch (error) {
          console.error("Error creating user in the database:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
