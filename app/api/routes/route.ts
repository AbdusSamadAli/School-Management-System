import { NextResponse } from "next/server";
import connectDB from "@/app/utils/db"
import bcrypt from "bcryptjs";
import User from "@/app/models/user";

export async function POST(request: Request) {
  const { username, password, role } = await request.json();

  // Validate request
  if (!username || !password || !role) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    await connectDB();

    // Find user in the database
    const existingUser = await User.findOne({ username, role }); // Rename the variable to avoid conflict

    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Sign-in successful",
      role: existingUser.role,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
