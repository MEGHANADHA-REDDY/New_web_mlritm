"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function ResearchObjectivesPage() {
  const objectives = [
    "To carryout/monitoring any sponsored project, consultancy project, including manpower requirement.",
    "To submit various project proposals to the government & non government funding agencies.",
    "To create awareness of funding opportunities through Institute’s Research Promotion Scheme.",
    "To provide a social setting to stimulate inter-disciplinary research among the students – Undergraduate research schemes and opportunities.",
    "To oversee publications of research articles/journals within the Institute through PARISHODHANA – R&D Newsletter)",
    "To execute MoUs with R&D organizations and Industries.",
    "To provide Technology Development and Transfer via patenting & publishing book chapters (National/International)",
    "To initiate industry collaboration, interaction and Corporate Social Responsibility (CSR) projects.",
  ];

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Research Objectives</h1>
        </motion.div>

        <motion.div
          className="bg-card border border-border rounded-xl p-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="space-y-3">
            {objectives.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                <Target className="w-5 h-5 text-primary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <ContactFooter />
    </div>
  );
}


