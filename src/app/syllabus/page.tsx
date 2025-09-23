"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function SyllabusPage() {
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
          <h1 className="text-5xl font-extrabold text-red-600 mb-2">
            Course Structure, Syllabus & Regulation Guidelines
          </h1>
        </motion.div>

        {/* Intro section: image left, text right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/computerlab.jpg"
              alt="Students in lab"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The syllabus at MLRITM is crafted to provide a comprehensive foundation across
              various disciplines, ensuring students gain both core knowledge and
              industry-relevant skills. It is thoughtfully structured to integrate
              theoretical concepts with practical applications, allowing students to build a
              strong base in their fields. The curriculum undergoes regular updates to keep
              pace with advancements in technology and industry needs, preparing students for
              emerging challenges and career opportunities.
            </p>
            <p>
              Each program syllabus is designed in alignment with regulatory and academic
              standards, guided by expert faculty and industry advisors. MLRITM’s commitment
              to quality education is evident in its detailed, outcome-based approach, which
              supports skill development, innovation, and critical thinking. The syllabus
              encourages students to be proactive learners, ready for professional success
              and societal contribution.
            </p>
          </div>
        </motion.div>

        {/* Download cards placeholder */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Download Syllabus PDFs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["CSE", "ECE", "EEE", "IT", "MECH", "CIVIL"].map((dept) => (
              <Link
                key={dept}
                href="#"
                className="group block border border-gray-300 rounded-md p-4 hover:shadow-md hover:border-primary transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium group-hover:text-primary">
                    {dept} Syllabus
                  </span>
                  <span className="text-sm text-muted-foreground">PDF</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


