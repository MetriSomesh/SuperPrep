import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password } = body;
  const userPassword = password;
  const finalPassword = await bcrypt.hash(userPassword, 10);
  try {
    await prisma.$connect();
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: finalPassword,
      },
    });

    await prisma.$disconnect();

    return NextResponse.json(
      {
        msg: "User Created Successfully",
        user: newUser,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    await prisma.$disconnect();
    console.log(error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
