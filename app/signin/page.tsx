"use client"
import { useState} from "react";
import Link from "next/link";

export default function SignIn() {
  const [userType, setUserType] = useState<"student" | "teacher" | "">("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields");
    } else {
      alert("Signed in successfully");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-7">
      <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>

      <div className="flex justify-around mb-6">
        <button
          onClick={() => setUserType("student")}
          className={`py-2 px-6 rounded-md ${userType === "student" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sign in as Student
        </button>
        <button
          onClick={() => setUserType("teacher")}
          className={`py-2 px-6 rounded-md ${userType === "teacher" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Sign in as Teacher
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Username</label>
          <input
            type="text"
            className="w-full p-3 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-md"
        >
          Sign In
        </button>
      </form>

      {userType === "student" && (
        <Link href="/student-management" passHref>
          <button className="mt-4 w-full py-3 bg-green-500 text-white rounded-md">
            Go to Student Dashboard
          </button>
        </Link>
      )}
      {userType === "teacher" && (
        <Link href="/teacher-management" passHref>
          <button className="mt-4 w-full py-3 bg-green-500 text-white rounded-md">
            Go to Teacher Dashboard
          </button>
        </Link>
      )}
    </div>
  );
}



