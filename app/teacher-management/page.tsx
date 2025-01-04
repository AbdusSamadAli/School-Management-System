"use client"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

interface Assignment {
  id: number;
  subject: string;
  description: string;
  completed: boolean;
}

interface AttendanceEntry {
  student: string;
  status: string;
  class: string;
}

export default function TeacherManagement() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [attendance, setAttendance] = useState<AttendanceEntry[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [attendanceMessage, setAttendanceMessage] = useState<string>("");
  const [newAssignment, setNewAssignment] = useState({ subject: "", description: "" });
  const [selectedClass, setSelectedClass] = useState<"10-A" | "10-B">("10-A");
  const classList: ("10-A" | "10-B")[] = ["10-A", "10-B"];
  const studentsByClass: { "10-A": string[]; "10-B": string[] } = {
    "10-A": ["John Doe", "Jane Smith"],
    "10-B": ["Alice Brown", "Bob Green"],
  };

  useEffect(() => {
    const storedAssignments = JSON.parse(localStorage.getItem("assignments") || "[]");
    const storedAttendance = JSON.parse(localStorage.getItem("attendance") || "[]");
    setAssignments(storedAssignments);
    setAttendance(storedAttendance);
  }, []);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  useEffect(() => {
    localStorage.setItem("attendance", JSON.stringify(attendance));
  }, [attendance]);

  const addAssignment = () => {
    if (newAssignment.subject && newAssignment.description) {
      const newAssignmentWithId = {
        ...newAssignment,
        id: new Date().getTime(),
        completed: false,
      };
      setAssignments([...assignments, newAssignmentWithId]);
      setNewAssignment({ subject: "", description: "" });
    }
  };
  

  const deleteAssignment = (id: number) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const toggleComplete = (id: number) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
      )
    );
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

  const markAttendance = (student: string, status: string) => {
    const updatedAttendance = attendance.map((entry) =>
      entry.student === student && entry.class === selectedClass
        ? { ...entry, status }
        : entry
    );

    if (!attendance.find((entry) => entry.student === student && entry.class === selectedClass)) {
      updatedAttendance.push({ student, status, class: selectedClass });
    }

    setAttendance(updatedAttendance);

    const message = `${student} is marked as ${status}`;
    setAttendanceMessage(message);
    setTimeout(() => setAttendanceMessage(""), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6">Teacher Management</h1>

      <Card className="p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create Assignment</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            value={newAssignment.subject}
            onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={newAssignment.description}
            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <form onSubmit={handleSubmitAssignment}>
            <input type="file" onChange={handleFileChange} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </form>
          <Button
            onClick={addAssignment}
            className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
          >
            Add Assignment
          </Button>
        </div>

        <ul className="mt-6 space-y-4">
          {assignments.map((assignment) => (
            <li
              key={assignment.id}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{assignment.subject}</h3>
                <p className="text-sm text-gray-600">{assignment.description}</p>
              </div>
              <div className="space-x-2">
                <Button
                  onClick={() => toggleComplete(assignment.id)}
                  className={`px-4 py-2 ${assignment.completed ? "bg-gray-300" : "bg-green-500"} text-white rounded-md`}
                >
                  {assignment.completed ? "Undo" : "Complete"}
                </Button>
                <Button
                  onClick={() => deleteAssignment(assignment.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Mark Attendance</h2>
        <div className="mb-4">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value as "10-A" | "10-B")}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            {classList.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>
        <ul>
          {studentsByClass[selectedClass].map((student) => (
            <li
              key={student}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-md mb-2"
            >
              <span>{student}</span>
              <div className="space-x-2">
                <Button
                  onClick={() => markAttendance(student, "Present")}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Present
                </Button>
                <Button
                  onClick={() => markAttendance(student, "Absent")}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Absent
                </Button>
              </div>
            </li>
          ))}
        </ul>
        {attendanceMessage && (
          <div className="mt-4 p-4 text-center bg-blue-100 border border-blue-400 text-blue-700 rounded">
            {attendanceMessage}
          </div>
        )}
      </Card>
    </div>
  );
}






