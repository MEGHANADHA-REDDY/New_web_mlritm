"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Building, Globe, ArrowLeft, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FacultySection from "@/components/FacultySection";
import ContactFooter from "@/components/ContactFooter";
import { id } from "date-fns/locale";

export default function aishePage() {
  const departmentData = {
  id: "AISHE",
  name: "All India Survey on Higher Education (AISHE) ",
  image: "/images/aishe.jpg",
  tagline: "GOVERNMENT OF INDIA (AISHE) ",
  
  // ADDED missing properties below
  faculty: 50,
  students: 1200,
  BTechIntake: 240,
  placementRate: "95%",   
  history: "The Department of Computer Science & Engineering was established in 1985 with a vision to be a pioneer in the field of computer education and research. It has since grown into one of the largest and most well-regarded departments in the institution, with state-of-the-art facilities and a strong alumni network.",
  vision: "To be a leader in computing education and research, fostering innovation and creating solutions for a global society.",
  mission: [
    "To provide a strong foundation in computer science principles and practices.",
    "To promote research in core and interdisciplinary areas of computing.",
    "To instill ethical values and a commitment to lifelong learning.",
    "To collaborate with industry and academia to address real-world challenges."
  ],
  achievements: [
    "Ranked among the top 10 CSE departments in the country.",
    "Faculty members have received prestigious research grants from national and international agencies.",
    "Students have won multiple national and international hackathons and coding competitions.",
    "Published over 500 research papers in high-impact journals in the last 5 years."
  ],
};

  return (
    <div className="min-h-screen bg-background pt-50">
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
              <ArrowLeft className="w-4 h-4 animation"  />
              Back to Home
            </Button>
          </Link>
          <h1 className="bg-blue-50 hover:bg-blue-100 text-4xl font-bold text-foreground mb-2">
            {departmentData.name}
          </h1>
          <p className="text-2xl text-primary font-semibold mb-6">
            {departmentData.tagline}
          </p>
      
        </motion.div>

        {/* Main Content Grid - Image Left, Text Right */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           
         
          {/* Left Column - Image */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className=" border-4 relative aspect-[4/1.25] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={departmentData.image}
                alt={departmentData.name}                  
                fill
                className="object-cover w-full h-full"                
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Quick Facts Card */}
            <div className="bg-accent/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                <div className="text-2xl font-bold text-primary">{departmentData.faculty}</div>
                <div className="text-sm text-muted-foreground">Faculty Members</div>
              </div>
              <div className="text-center">
              <div className="text-2xl font-bold text-primary">{departmentData.students}</div>
              <div className="text-sm text-muted-foreground">Total Students</div>
              </div>
              <div className="text-center">
        <div className="text-2xl font-bold text-yellow-600">6</div>
        <div className="text-sm text-muted-foreground">M.Tech Intacke</div>
      </div>
          </div>
                <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">{departmentData.BTechIntake}</div>
        <div className="text-sm text-muted-foreground">B.Tech Intake</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">{departmentData.placementRate}</div>
        <div className="text-sm text-muted-foreground">Placement Rate</div>
      </div>
      {/* New Third Column Item */}
      <div className="text-center">
        <div className="text-2xl font-bold text-yellow-600">25+</div>
        <div className="text-sm text-muted-foreground">Research Labs</div>
      </div>
    </div>
              </div>
            </div>  
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
           
          </motion.div>
        </motion.div>

        {/* Department History */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Department History
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {departmentData.history}
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {departmentData.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Mission
              </h3>
              <ul className="space-y-2">
                {departmentData.mission.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {departmentData.achievements.map((achievement, index) => (
              <motion.div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>      

      </div>
 
      {/* Footer */}
      <ContactFooter />
    </div>
  );
}