"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function CollegeCircularsPage() {
  const ugCourses = [
    { program: "UG Courses", specialization: "Civil Engineering(CE)", intake: 60 },
    { program: "", specialization: "Computer Science and Engineering(CSE)", intake: 180 },
    { program: "", specialization: "CSE(Artificial Intelligence[AI] and Machine Learning[ML])", intake: 180 },
    { program: "", specialization: "Computer Science and Engineering (Cyber Security)", intake: 60 },
    { program: "", specialization: "Computer Science and Engineering(Data Science)", intake: 180 },
    { program: "", specialization: "Electronics and Communication Engineering(ECE)", intake: 180 },
    { program: "", specialization: "Electrical and Electronics Engineering(EEE)", intake: 60 },
    { program: "", specialization: "Information Technology (IT)", intake: 60 },
    { program: "", specialization: "Computer Science and Information Technology(CSIT)", intake: 60 },
    { program: "", specialization: "Mechanical Engineering(ME)", intake: 60 },
  ];

  const pgCourses = [
    { program: "PG Courses", specialization: "M.Tech CAD/CAM", intake: 18 },
    { program: "", specialization: "M.Tech Computer Science Engineering", intake: 18 },
    { program: "", specialization: "M.Tech Embedded Systems", intake: 18 },
    { program: "", specialization: "M.Tech Structures", intake: 18 },
    { program: "", specialization: "Master of Business Administration", intake: 120 },
  ];

  const ugTotal = ugCourses.reduce((sum, c) => sum + c.intake, 0);
  const pgTotal = pgCourses.reduce((sum, c) => sum + c.intake, 0);

  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mb-4 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-extrabold text-foreground mb-2">Academics</h1>
        </motion.div>

        {/* Hero-like section: image left, text right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/engineeringlab.jpeg"
              alt="MLRITM Academics"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              College Circulars
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The Academics section at MLRITM underscores the institution’s dedication to
              providing quality education across diverse disciplines. With a structured
              curriculum, the college emphasizes experiential learning, integrating
              hands-on practice, research, and industry exposure to enhance students’
              practical skills and critical thinking abilities. This approach empowers
              students to bridge the gap between theoretical knowledge and real-world
              applications, preparing them for dynamic career paths.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              MLRITM’s academic programs are meticulously designed to align with evolving
              industry standards, supported by an experienced faculty and advanced
              facilities. The institute promotes a learner-centered approach with a focus on
              continuous improvement, shaping students into competent professionals ready to
              excel in their fields.
            </p>
          </div>
        </motion.div>

        {/* UG Courses Table */}
        <div className="mb-12">
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-foreground">
                  <th className="w-48 px-4 py-3 text-center font-semibold border border-gray-300">Program</th>
                  <th className="px-4 py-3 text-left font-semibold border border-gray-300">Specialization</th>
                  <th className="w-40 px-4 py-3 text-left font-semibold border border-gray-300">Students Intake</th>
                </tr>
              </thead>
              <tbody>
                {ugCourses.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/40 transition-colors">
                    {idx === 0 && (
                      <td rowSpan={ugCourses.length} className="px-4 py-3 text-center align-middle text-muted-foreground border border-gray-300">
                        UG Courses
                      </td>
                    )}
                    <td className="px-4 py-3 border border-gray-300">
                      <Link href="#" className="text-red-600 hover:underline hover:text-blue-600 transition-colors">
                        {row.specialization}
                      </Link>
                    </td>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.intake}</td>
                  </tr>
                ))}
                <tr className="bg-white font-semibold">
                  <td className="px-4 py-3 text-center border border-gray-300">Total</td>
                  <td className="px-4 py-3 border border-gray-300"></td>
                  <td className="px-4 py-3 border border-gray-300">{ugTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PG Courses Table */}
        <div className="mb-16">
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-foreground">
                  <th className="w-48 px-4 py-3 text-center font-semibold border border-gray-300">Program</th>
                  <th className="px-4 py-3 text-left font-semibold border border-gray-300">Specialization</th>
                  <th className="w-40 px-4 py-3 text-left font-semibold border border-gray-300">Students Intake</th>
                </tr>
              </thead>
              <tbody>
                {pgCourses.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/40 transition-colors">
                    {idx === 0 && (
                      <td rowSpan={pgCourses.length} className="px-4 py-3 text-center align-middle text-muted-foreground border border-gray-300">
                        PG Courses
                      </td>
                    )}
                    <td className="px-4 py-3 border border-gray-300">
                      <Link href="#" className="text-red-600 hover:underline hover:text-blue-600 transition-colors">
                        {row.specialization}
                      </Link>
                    </td>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.intake}</td>
                  </tr>
                ))}
                <tr className="bg-white font-semibold">
                  <td className="px-4 py-3 text-center border border-gray-300">Total</td>
                  <td className="px-4 py-3 border border-gray-300"></td>
                  <td className="px-4 py-3 border border-gray-300">{pgTotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


