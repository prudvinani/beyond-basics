"use client";
import CourseAccordion from "@/app/(CourseStructure)/CourseAccordian";
import { courseModules } from "@/app/(CourseStructure)/CourseData";

export default function Course() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Header Section */}
      <div className="bg-white py-12 text-center">
        <button className="text-gray-700 py-2 border-2 text-sm font-outfit border-gray-300 px-4 rounded-full">
          Course Structure
        </button>

        <div className="mt-6">
          <h2 className="text-3xl font-outfit sm:text-4xl text-gray-800 leading-tight">
            What you will <span className="text-yellow-500">Learn?</span>
          </h2>
          <p className="mt-3 text-gray-600 font-outfit text-lg">
            From job preparation to AI expertise, learn what truly matters in your career journey.
          </p>
        </div>
      </div>

      {/* Course Modules */}
      <CourseAccordion modules={courseModules} />
    </main>
  );
}
