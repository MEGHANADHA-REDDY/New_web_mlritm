"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function CommitteesPage() {
  const aicteUgcStatutory = [
    "Internal Complaints Committee (ICC)",
    "Grievance Redressal",
    "Anti Ragging",
    "Sc/St/Bc-Cell Committee/ Equal Opportunity Cell",
  ];
  const ugcStatutory = [
    "Board of Management",
    "Governing Body",
    "Academic Council",
    "Board of Studies",
    "Finance Committee",
  ];
  const nonStatutory = [
    "Disciplinary Committee",
    "Anti-Ragging",
    "Placement And Training (Pat)",
    "Internal Quality Assurance Center",
    "Research And Ethics",
    "Ict And Self E- Learning",
    "Innovation & Incubation Center",
    "General Maintenance Committee& House Keeping Committee",
    "Time Table Committee",
    "Transport Committee",
    "Purchase Committee",
    "Internal Complaint Committee",
    "Library Committee",
    "Public Relations/Press Media/Publication",
    "Hostel Committee",
    "Alumni Association",
    "Industry-Institute Interaction Cell",
    "Sc/St/Bc-Cell Committee/ Equal Opportunity Cell",
    "Canteen Committee",
    "Games & Sports",
    "Computer Centre & Network Maintenance And Surveillance",
    "Solar & Electrical Maintenance",
    "Nss Committee",
    "Rti Committee",
    "Examination Committee",
    "Faculty Grievance Cell",
    "Edc Committee",
    "Academic Research And Project Committee",
    "Website Committee",
    "Student Grievance & Redressal Committee",
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
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Statutory and Non-Statutory (Institute Level) Committees
          </h1>
          <p className="text-sm text-muted-foreground">
            Attention: The internal data of table “30” is corrupted!
          </p>
          <p className="mt-4 text-muted-foreground">
            The institute has the following Statutory & Non-Statutory (Institute Level)
            committees to ensure proper management of academic, financial, and general
            administrative affairs.
          </p>
        </motion.div>

        {/* Lists */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">AICTE / UGC Statutory Committees</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {aicteUgcStatutory.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">UGC Statutory Committees</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {ugcStatutory.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Statutory (Institute Level) Committees</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {nonStatutory.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


