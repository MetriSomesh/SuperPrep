"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthFormField } from "@/components/auth/auth-form-field";
import { AuthProviders } from "@/components/auth/auth-providers";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    const newUser = await axios.post("/api/signup", {
      email: email,
      password: password,
    });
    if (newUser.status === 200) {
      // After successful signup, sign in the user with NextAuth
      const signInResponse = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });

      if (signInResponse?.error) {
        console.error("Error during sign-in:", signInResponse.error);
      } else {
        router.push("/chat");
      }
    } else {
      console.error("Error during user creation:", newUser);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <form onSubmit={handleSubmit}>
        <AuthCard
          title="Create an account"
          description="Join SuperPrep to start your enhanced learning journey"
          footer={
            <>
              <Button type="submit" className="w-full">
                Create account
              </Button>
              <AuthProviders />
              <p className="text-sm text-muted-foreground text-center">
                Already have an account?{" "}
                <Link href="/signin" className="text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          }
        >
          <AuthFormField
            id="name"
            label="Full Name"
            placeholder="John Doe"
            value={name}
            onChange={setName}
          />
          <AuthFormField
            id="email"
            label="Email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={setEmail}
          />
          <AuthFormField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
        </AuthCard>
      </form>
    </div>
  );
}
