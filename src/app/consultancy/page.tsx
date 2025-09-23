"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

type Row = { sno: number; title: string; company: string; pi: string; duration: string; amount: string };

export default function ConsultancyPage() {
  const y2021_22: Row[] = [
    { sno: 1, title: "Third party quality control for civil works", company: "NIZAMPET MUNCIPAL CORPORATION", pi: "DR.M.Harihanad / DR.K.Murali", duration: "ONE YEAR", amount: "14,00,000" },
    { sno: 2, title: "Third party quality control for civil works", company: "GREATER HYDERABAD MUNCIPAL CORPORATION", pi: "Dr.R.Gopi / Dr.DSVSMRK CHAKRAVARTHY", duration: "ONE YEAR", amount: "18,00,000" },
    { sno: 3, title: "DATABASE DEVELOPMENT", company: "BEES SOFTWARE SOLUTIONS", pi: "DR.S. PRATAP SINGH", duration: "6 MONTHS", amount: "2,00,000" },
    { sno: 4, title: "ELECTRICAL MAINTANANCE", company: "MIDWAY DRIVEINN", pi: "Dr.KISHORE SANAPAL", duration: "6 MONTHS", amount: "2,00,000" },
    { sno: 5, title: "ENGINEERING CONSULTANCY SERVICES", company: "AKSHITHA FABRICATION", pi: "Dr.S.P.JANI", duration: "ONE YEAR", amount: "1,95,000" },
  ];

  const y2020_21: Row[] = [
    { sno: 1, title: "Third party quality control for civil works", company: "GREATER HYDERABAD MUNCIPAL CORPORATION", pi: "Dr.R.Gopi / Dr.DSVSMRK CHAKRAVARTHY", duration: "ONE YEAR", amount: "18,00,000" },
    { sno: 2, title: "DATABASE DEVELOPMENT", company: "BEES SOFTWARE SOLUTIONS", pi: "Dr.S. Pratap singh", duration: "6 MONTHS", amount: "2,00,000" },
    { sno: 3, title: "QUALITY CONTROL", company: "CHOWDARY PACKTECH PVT LTD", pi: "DR.D.NAGESWARA RAO", duration: "6 MONTHS", amount: "2,60,000" },
    { sno: 4, title: "ENGINEERING CONSULTANCY SERVICES", company: "AKSHITHA FABRICATION", pi: "Dr.S.P.JANI", duration: "ONE YEAR", amount: "1,95,000" },
  ];

  const y2019_20: Row[] = [
    { sno: 1, title: "DATABASE DEVELOPMENT", company: "BEES SOFTWARE SOLUTIONS HYDERABAD, TELANGANA", pi: "DR.S. PRATAP SINGH", duration: "6 MONTHS", amount: "2,00,000" },
    { sno: 2, title: "DATABASE DEVELOPMENT", company: "BEES SOFTWARE SOLUTIONS, HYDERABAD, TELANGANA", pi: "DR.J.SATHIMOORTHY", duration: "6 MONTHS", amount: "2,10,000" },
    { sno: 3, title: "ELECTRICAL MAINTANANCE FOR TRANSFORMERS", company: "SAI SRI ELECTRICALS, JANGAON, TELANGANA", pi: "Dr.BACHU SRINIVAS / Dr.A.VINOD", duration: "6 MONTHS", amount: "2,00,000" },
    { sno: 4, title: "ENGINEERING SERVICES FOR COLD STORAGE CONSTRUCTION", company: "B.SRINIVAS, JADCHERLA, TELANGANA", pi: "Dr.R.Gopi", duration: "8 MONTHS", amount: "4,17,000" },
    { sno: 5, title: "ENGINEERING CONSULTANCY SERVICES", company: "RAJESWARI ENGINEERING WORKS, PATANCHERU, SANGAREDDY, TELANGANA", pi: "DR.S.P.JANI", duration: "ONE YEAR", amount: "3,74,000" },
    { sno: 6, title: "PREPARATION OF DYES FOR BOTTLE SHAPES", company: "SV POLYMER JEEDIMETLA INDUSTRIAL AREA, HYDERABAD, TELANGANA", pi: "DR.G.SURYA PRAKASH RAO", duration: "ONE YEAR", amount: "3,50,000" },
    { sno: 7, title: "QUALITY CHECK", company: "TRANSPACKS, ID BOLLARAM, HYDERABAD, TELANGANA", pi: "DR.P.NAGESWARA RAO", duration: "ONE YEAR", amount: "3,50,000" },
  ];

  const y2018_19: Row[] = [
    { sno: 1, title: "Privacy Preserving Public Auditing for Secure Cloud Storage", company: "Zype Digital pvt.Ltd", pi: "Dr. B.Ravi Prasad / Mrs  M. Pallavi", duration: "ONE YEAR", amount: "2,00,000" },
    { sno: 2, title: "Improving Hadoop Performance using the Meta Data of Related Jobs", company: "Zype Digital pvt.Ltd", pi: "Dr N.Pushpalatha / Dr. B. RAVI PRASAD / Mr Y.APPARAO", duration: "ONE YEAR", amount: "2,00,000" },
    { sno: 3, title: "Dynamic Resource Allocation for Map Reduce", company: "Elite Linkin Softs", pi: "Dr .K .AbdulBasith / Dr.K.Venkateswa ra Reddy / Mr Y.AppaRao", duration: "ONE YEAR", amount: "2,00,000" },
    { sno: 4, title: "Wide Area Analytics for Geographical Distributed Data Centers", company: "BEES SOFTWARE SOLUTIONS PVT.LTD.", pi: "Dr.C. Balarengadurai", duration: "ONE YEAR", amount: "2,00,000" },
    { sno: 5, title: "ENGINEERING CONSULTANCY SERVICES", company: "MTE INDUSTRIES PVT.LTD", pi: "DR.D.VENKATESWARLU", duration: "ONE YEAR", amount: "1,85,000" },
    { sno: 6, title: "Marketing consultancy", company: "VANITHA SUPER MARKET,HYDERABAD", pi: "Dr.K.Veeraiah / Dr.K.Niranjan", duration: "SIX MONTHS", amount: "1,13,000" },
    { sno: 7, title: "QUALITY CHECK", company: "STYRAX INSTRUMENTS INDIA PVT.LTD,HYDERABADW", pi: "DR.N.SRINIVAS", duration: "ONE YEAR", amount: "2,08,000" },
    { sno: 8, title: "Soil Investigation and Soil testing for an Apartment (5 Floor)", company: "NJR Constructions", pi: "Dr. R. Gopi", duration: "ONE YEAR", amount: "2,00,000" },
    { sno: 9, title: "Structural consultancy services for Elegant avenues, Pragathinagar, Hyderabad", company: "Alekya Builders and Developers", pi: "Dr. M. Harihanandh / Mr.V.Sathish Kumar", duration: "ONE YEAR", amount: "2,50,000" },
    { sno: 10, title: "Concrete mix design for construction Cold Storage, Kammam", company: "Rahman civil contractors", pi: "Dr. M. Harihanandh", duration: "ONE YEAR", amount: "2,30,000" },
  ];

  const Table = ({ title, data }: { title: string; data: Row[] }) => (
    <div className="mb-12">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="overflow-x-auto rounded-md border border-gray-300">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-100 text-foreground">
              <th className="w-16 px-4 py-3 text-left font-semibold border border-gray-300">S.NO</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-300">Title of Consultancy</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-300">Name of Funding Company</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-300">Principal Investigator</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-300">Duration</th>
              <th className="px-4 py-3 text-left font-semibold border border-gray-300">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={`${title}-${r.sno}`} className="bg-white hover:bg-blue-50/40 transition-colors">
                <td className="px-4 py-3 border border-gray-300">{r.sno}</td>
                <td className="px-4 py-3 border border-gray-300">{r.title}</td>
                <td className="px-4 py-3 border border-gray-300">{r.company}</td>
                <td className="px-4 py-3 border border-gray-300">{r.pi}</td>
                <td className="px-4 py-3 border border-gray-300">{r.duration}</td>
                <td className="px-4 py-3 border border-gray-300">{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 mb-4 hover:bg-accent">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Consultancy Works</h1>
        </motion.div>

        <Table title="2021-22" data={y2021_22} />
        <Table title="2020-21" data={y2020_21} />
        <Table title="2019-20" data={y2019_20} />
        <Table title="2018-19" data={y2018_19} />
      </div>

      <ContactFooter />
    </div>
  );
}


