"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export default function StudentManagement() {
  const [enrolledCourses] = useState<string[]>(["Math", "Science", "History"]);
  const [attendance, setAttendance] = useState<{ [key: string]: number }>({});
  const [assignments] = useState<{ [key: string]: string[] }>({
    Math: ["Homework 1", "Homework 2"],
    Science: ["Lab Report 1", "Homework 3"],
    History: ["Essay on WWII"],
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const storedAttendance = JSON.parse(
      localStorage.getItem("attendance") || "{}"
    );
    setAttendance(storedAttendance);
  }, []);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmitAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file to submit.");
      return;
    }
    alert(`Assignment submitted: ${selectedFile.name}`);
    setSelectedFile(null);
  };

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Student Dashboard
      </h1>
          <Card className="p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Enrolled Courses
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center bg-blue-50 p-3 rounded-lg shadow-md">
                <span className="text-lg font-medium text-gray-800">
                  Mathematics
                </span>
                <span className="text-sm text-gray-600">
                  Attendance:{" "}
                  <span className="font-semibold text-green-600">95%</span>
                </span>
              </li>
              <li className="flex justify-between items-center bg-green-50 p-3 rounded-lg shadow-md">
                <span className="text-lg font-medium text-gray-800">
                  Science
                </span>
                <span className="text-sm text-gray-600">
                  Attendance:{" "}
                  <span className="font-semibold text-red-600">72%</span>
                </span>
              </li>
              <li className="flex justify-between items-center bg-green-50 p-3 rounded-lg shadow-md">
                <span className="text-lg font-medium text-gray-800">
                  History
                </span>
                <span className="text-sm text-gray-600">
                  Attendance:{" "}
                  <span className="font-semibold text-yellow-600">86%</span>
                </span>
              </li>
            </ul>
          </Card>

      <Card className="p-6 shadow-md mb-8 mt-6">
        <h2 className="text-2xl font-semibold mb-4">Assignments</h2>
        <ul className="space-y-4">
          {enrolledCourses.map((course) => (
            <li key={course} className="space-y-4">
              <div className="font-semibold">{course} Assignments:</div>
              <ul className="list-disc pl-6">
                {assignments[course]?.map((assignment, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {assignment}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <form onSubmit={handleSubmitAssignment} className="space-y-4">
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <Button type="submit" className="w-full mt-4">
              Submit Assignment
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
