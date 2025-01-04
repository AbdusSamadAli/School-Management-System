"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-10">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Our School Management System</h1>
        <p className="text-xl text-gray-600 mt-4">Manage your courses, assignments, and more with ease!</p>
      </header>

      <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-700">Student Portal</h2>
          <p className="mt-4 text-gray-600">
            Access your dashboard, enroll in courses, and manage assignments with the Student Portal.
          </p>
          <Link href="/dashboard?role=student">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
              Enter Student Portal
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-700">Teacher Portal</h2>
          <p className="mt-4 text-gray-600">
            Manage your courses, create assignments, and track student progress with the Teacher Portal.
          </p>
          <Link href="/dashboard?role=teacher">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
              Enter Teacher Portal
            </button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-gray-700">Learn More</h2>
          <p className="mt-4 text-gray-600">
            Explore our features, learn about the system, and see how it can help you manage your school efficiently.
          </p>
          <Link href="/about">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

