
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "School Management System",
  description:
    "A complete system for managing students, teachers, and courses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div
          className="flex-grow flex flex-col bg-gradient-to-r from-teal-300 via-yellow-200 to-pink-200 animate-gradient sm:bg-gradient-to-b sm:from-teal-400 sm:via-yellow-300 sm:to-pink-300 md:bg-gradient-to-tl md:from-teal-500 md:via-yellow-400 md:to-pink-400 lg:bg-gradient-to-br xl:bg-gradient-to-l"
          style={{
            backgroundSize: "400% 400%",
            animation: "gradientShift 8s ease infinite",
          }}
        >
          <style>
            {`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}
          </style>

          <nav className="bg-gray-800 text-white py-4">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
              <div className="flex-1 text-left ml-9">
                <Link href="/" className="text-xl font-bold">
                  EduSphere: School Management System
                </Link>
              </div>
              <div className="space-x-4 mt-2 sm:mt-0">
                <Link href="/" className="hover:text-yellow-500">
                  Home
                </Link>
                <Link href="/signin" className="hover:text-yellow-500">
                  Sign In
                </Link>
                <Link href="/teacher-management" className="hover:text-yellow-500">
                  Teacher Management
                </Link>
                <Link href="/student-management" className="hover:text-yellow-500">
                  Student Management
                </Link>
              </div>
            </div>
          </nav>
  
          <main className="flex-grow">{children}</main>
        </div>
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p>&copy; 2025 School Management System. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
  
}
