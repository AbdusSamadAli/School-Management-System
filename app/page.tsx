import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="text-center py-12 bg-gradient-to-r from-green-500 via-green-900 to-slate-900 text-white">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to the School Management System
        </h1>
        <p className="mt-4 text-lg font-medium">
          Manage students and teachers tasks in one place. Simplify
          the administrative tasks with a user-friendly interface and robust
          management tools.
        </p>
      </header>

      <main className="flex-grow max-w-7xl mx-auto p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Student Management
            </h2>
            <p className="text-gray-700 mb-4">
              In the Student Management section, students can manage
              student profiles, submit assignemts and  track attendance
              and much more.
            </p>
            <Link href="/student-management">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out rounded-lg shadow-md">
                Go to Student Management
              </Button>
            </Link>
          </Card>

          <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Teacher Dashboard
            </h2>
            <p className="text-gray-700 mb-4">
              The Teacher Dashboard enables teachers to create and manage
              courses, assignments, and track student records. Teachers can
              communicate with students, monitor their progress, and create
              customized assignments for the class.
            </p>
            <Link href="/teacher-management">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out rounded-lg shadow-md">
                Go to Teacher Dashboard
              </Button>
            </Link>
          </Card>

          <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-blue-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Sign In
            </h2>
            <p className="text-gray-700 mb-4">
              Sign in to the platform as a teacher or student to access
              personalized dashboards, manage accounts, and start interacting
              with your courses, assignments, and performance data.
            </p>
            <Link href="/signin">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 ease-in-out rounded-lg shadow-md">
                Sign In
              </Button>
            </Link>
          </Card>
        </section>

        <section className="bg-blue-100 hover:bg-blue-200 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                What is the purpose of the School Management System?
              </h3>
              <p className="text-gray-700">
                The School Management System is designed to streamline
                administrative tasks, helping both teachers and students manage
                their academic tasks more effectively. It includes tools for
                managing profiles, assignments, and attendance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Who can use the system?
              </h3>
              <p className="text-gray-700">
                The system is intended for teachers and students. Teachers can
                manage courses, assignments, and track student performance,
                while students can access their profiles, assignments, and
                grades.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                How do I sign in to the system?
              </h3>
              <p className="text-gray-700">
                To sign in, click on the Sign In button in the menu and enter
                your credentials. If you are a new user, you can register as a
                teacher or student to get started.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Can teachers track student attendance?
              </h3>
              <p className="text-gray-700">
                Yes, teachers can mark attendance for students directly within
                their dashboard, which integrates with the student profile to
                track overall attendance.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
