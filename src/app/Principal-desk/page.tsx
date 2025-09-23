"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Award, BookOpen, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function PrincipalDeskPage() {
  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mb-8 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-5xl font-bold text-foreground mb-8">
            Principal's Desk
          </h1>
        </motion.div>

        {/* Director Section */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left - Image */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Dr.-R.-Murali-Prasad.png"
                  alt="Principal - Marri Laxman Reddy Institute of Technology and Management"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Information */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-foreground uppercase">
                Principal - Marri Laxman Reddy Institute of Technology and Management
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                    

Dr. R. Murali Prasad, M. Tech., Ph.D., MISTE, the Principal, Marri Laxman Reddy Institute of Technology & Management, is young & dynamic Professor of ECE and achieved an immense exposure in Academic, Research and Administrative spheres at reputed Engineering Colleges.
</p><p>
Dr. R. Murali Prasad contributed immensely for the growth of institutes by introducing the disciplinary innovative in the lifestyle of under graduate engineering students. He has established Institute – Industry Interaction and Research & Development cells in the institute.
</p>
<p>
<b>Research & Guidance:</b>
<br/>
Dr. R. Murali Prasad has published more than 41 research papers at National and International Level in the areas of Analog and Digital Communications, Signals and Systems, Control Systems, Satellite Communications, Optical Fiber Communications, Digital Signal Processing, and other emerging fields of Electronics.
</p>
               
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Principal's Vision & Goals */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Principal Vision & Goals
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Academic Excellence */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Academic Excellence</h4>
              <p className="text-muted-foreground">
                Maintaining the highest standards of education through innovative teaching methods 
                and comprehensive curriculum that meets industry requirements.
              </p>
            </div>

            {/* Student Development */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Student Development</h4>
              <p className="text-muted-foreground">
                Fostering holistic development of students through extracurricular activities, 
                leadership opportunities, and character building initiatives.
              </p>
            </div>

            {/* Industry Integration */}
            <div className="bg-accent/50 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Industry Integration</h4>
              <p className="text-muted-foreground">
                Building strong partnerships with industry leaders to provide students with 
                real-world experience and placement opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Message from Principal */}
        <motion.div 
          className="bg-card border border-border rounded-xl p-8 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Award className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              A Message from the Principal
            </h3>
            <div className="max-w-6xl mx-auto">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                "Education is the foundation upon which we build our future. At MLR Institute of 
                Technology and Management, we are committed to providing world-class education that 
                empowers our students to become leaders in their respective fields. Our focus on 
                academic excellence, practical learning, and character development ensures that our 
                graduates are not only technically competent but also socially responsible individuals 
                who contribute meaningfully to society."
              </blockquote>
            </div>
          </div>
        </motion.div>    
        
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
