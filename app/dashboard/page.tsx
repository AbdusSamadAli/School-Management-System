"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

// Mock User Data (you can replace this with actual authentication logic)
const mockUser = {
  role: "student", // Change to "teacher" for testing teacher view
  name: "John Doe",
  enrolledCourses: [
    { id: 1, name: "Math 101", teacher: "Mr. Smith" },
    { id: 2, name: "History 202", teacher: "Ms. Davis" },
  ],
  managedCourses: [
    { id: 1, name: "Math 101", students: 25 },
    { id: 2, name: "Science 303", students: 30 },
  ],
};

const Dashboard = () => {
  const [user, setUser] = useState(mockUser);

  // Fetch user data (for example, from an API or context)
  useEffect(() => {
    // Here you would typically fetch user data from an API or context
    // For now, using mock data
    setUser(mockUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Welcome, {user.name}</h1>

      {user.role === "student" ? (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Enrolled Courses</h2>
          <ul className="space-y-4">
            {user.enrolledCourses.map((course) => (
              <li key={course.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg">{course.name}</h3>
                <p className="text-sm text-gray-600">Instructor: {course.teacher}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>
            <Link
              href="/update-profile"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-4 inline-block hover:bg-blue-700 transition duration-300"
            >
              Update Profile
            </Link>
          </div>
        </div>
      ) : user.role === "teacher" ? (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Managed Courses</h2>
          <ul className="space-y-4">
            {user.managedCourses.map((course) => (
              <li key={course.id} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-lg">{course.name}</h3>
                <p className="text-sm text-gray-600">Number of Students: {course.students}</p>
                <Link
                  href={`/course/${course.id}`}
                  className="text-blue-600 mt-2 block hover:underline"
                >
                  Manage Course
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-800">Assignments</h2>
            <Link
              href="/assignments"
              className="bg-green-600 text-white py-2 px-6 rounded-lg mt-4 inline-block hover:bg-green-700 transition duration-300"
            >
              Manage Assignments
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Dashboard;
