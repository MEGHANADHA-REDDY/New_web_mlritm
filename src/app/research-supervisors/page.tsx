"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

type SupervisorRow = {
  sno: number;
  guide: string;
  student: string;
  roll: string;
  university: string;
  status: string;
};

export default function ResearchSupervisorsPage() {
  const rows: SupervisorRow[] = [
    {
      sno: 1,
      guide: "Dr.GADE NARSINGARAO",
      student: "Mohd.Abdul Shukur",
      roll: "1503PH1723",
      university: "JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY, HYDERABAD, TELANGANA",
      status: "REGISTERED-2017",
    },
    {
      sno: 2,
      guide: "DR.BACHU SRINIVAS",
      student: "N.RAMYATEJA",
      roll: "183040063",
      university: "KL UNIVERSITY, VIJAYAWADA, ANDHRA PRADESH",
      status: "REGISTERED-2019",
    },
    {
      sno: 3,
      guide: "DR.K.SURESH BABU",
      student: "P.GEETHA SWAROOPA",
      roll: "13323009",
      university: "KL UNIVERSITY, VIJAYAWADA, ANDHRA PRADESH",
      status: "AWARDED-2019",
    },
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Research Supervisors</h1>
          <p className="text-muted-foreground">Ph.D-GUIDESHIP</p>
        </motion.div>

        <div className="overflow-x-auto rounded-md border border-gray-300 mb-16">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-100 text-foreground">
                <th className="w-16 px-4 py-3 text-left font-semibold border border-gray-300">S.NO</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Name Of Guide</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Name Of Student</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Roll number</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Registered university</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sno} className="bg-white hover:bg-blue-50/40 transition-colors">
                  <td className="px-4 py-3 border border-gray-300">{r.sno}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.guide}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.student}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.roll}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.university}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


