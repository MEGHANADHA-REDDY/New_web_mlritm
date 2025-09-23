"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

type PatentRow = { sno: number; faculty: string; title: string; appNo: string; year: string };

export default function PatentsPage() {
  const rows: PatentRow[] = [
    { sno: 1, faculty: "Dr. Manikannan K", title: "Artificial Intelligence Based Customer Relationship Managementof E-Commerce Sites", appNo: "202241004605", year: "11/02/2022" },
    { sno: 2, faculty: "Dr B Ravi Prasad", title: "Artificial Intelligent System for Predicting the hard disk failure", appNo: "202141048468", year: "03/12/2021" },
    { sno: 3, faculty: "G. Bhagyalaxmi", title: "Studies On Mixed Ligand Complexes Of Bivalent Meta Lions with 4, 6 -Dimeno-2- Mercapto Pyrimidine.", appNo: "202141040836", year: "24/09/2021" },
    { sno: 4, faculty: "Dr. M.Harihanandh", title: "Sensitivity Of Concrete With Cenospheres to sustaniability Indicators", appNo: "202141037348", year: "27/08/2021" },
    { sno: 5, faculty: "Dr.R.GOPI", title: "Monitoring of the Corrosion potential of the Reinforcement of the examined Beam", appNo: "202141037136", year: "27/08/2021" },
    { sno: 6, faculty: "Dr. Tumuluri Subramanya Srinivas", title: "A Content Protection for Images in Cloud Computing", appNo: "202141029419", year: "16/07/2021" },
    { sno: 7, faculty: "Dr. Ravi Prasad B", title: "Kitchen Waste Water Harvesting", appNo: "202141016360", year: "23/04/2021" },
    { sno: 8, faculty: "Dr. Balarengadurai Chinnaiah", title: "Improved Vehicle Protection System During Night Vision is Based on Embedded", appNo: "202141016370", year: "16/04/2021" },
    { sno: 9, faculty: "Dr. JANI S.P", title: "Design and Development of Money sanitizing Machine", appNo: "202141006434", year: "19/02/2021" },
    { sno: 10, faculty: "Bachu Srinivas", title: "IPDN-Read Handwriting: Intelligent Process to Read Handwriting using Deep Learning and Neural Networks", appNo: "2020103527 (AUSTRALIAN-GRANTED)", year: "19/11/2020" },
    { sno: 11, faculty: "Mr.Siva Rama Prasad Kollu Mrs. A. Shalini Mr.D.Shiva Rama Krishna Mr.Ch.V.V.Narasimha Raju Mr.B.Srinivas Goud", title: "Driven Smart Security Artificial Intelligence in ATM Cabins to Detect Burglary", appNo: "202041049428", year: "27/11/2020" },
    { sno: 12, faculty: "Dr. M.Naga Lakshmi", title: "Voice Authentication Method and Utilizing same", appNo: "202041036671", year: "25/09/2020" },
    { sno: 13, faculty: "Dr.N.Chandra Sekar Reddy", title: "Cost Economization with Nano Material Composites Preparation in thermal Design of Compact Hear Exchanger", appNo: "202041040663", year: "25/09/2020" },
    { sno: 14, faculty: "Dr. M. Saravanan", title: "An Intelligent Mobile Alert System for Reservoir Water Level and Flow Indicatioin Integrated with GPS for Farmers.", appNo: "202041032052", year: "21/08/2020" },
    { sno: 15, faculty: "Dr. T.S. Srinivas", title: "IBDD-Crop Health: IOT-Based Device to Detect the Crop Health", appNo: "202041012385", year: "15/05/2020" },
    { sno: 16, faculty: "Dr.B.Ravi Prasad Dr.C.Balarengadurai\nDr.Nagalakshmi Malempati\nDr.A.Annamalai Giri\nK.Anil", title: "Overweight Detection And Ignition Control System For Motorcycles", appNo: "201941034004", year: "20/09/2019" },
    { sno: 17, faculty: "G. Amarnath, A. Hemanth Kumar, K. Shashikanth, T. Kesava Prakash, P.J.Durgasai", title: "Unmanned Arerial vehicle", appNo: "201932564912", year: "20/09/2019" },
    { sno: 18, faculty: "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT", title: "Design of Structural Casing for Mounting Solar Panels", appNo: "201641035052", year: "13/04/2018" },
    { sno: 19, faculty: "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT", title: "System and Method for Provisioning Local Positioning Using Cellular Networks", appNo: "201641035051", year: "13/04/2018" },
    { sno: 20, faculty: "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT", title: "A Vapor Compression Refrigeration System to Enhance the coefficient of Performance by using Nano-Refrigerants.", appNo: "201641037524", year: "15/09/2017" },
    { sno: 21, faculty: "MARRI LAXMAN REDDY INSTITUTE OF TECHNOLOGY AND MANAGEMENT", title: "Micro Hear Pipe for Transferring Hear using Natural and Forced Convection Techniques", appNo: "201641037525", year: "25/08/2017" },
  ];

  return (
    <div className="min-h-screen bg-background pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 mb-4 hover:bg-accent">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Patents</h1>
        </motion.div>

        <div className="overflow-x-auto rounded-md border border-gray-300 mb-16">
          <table className="min-w-full text-sm border-collapse">
            <thead>
              <tr className="bg-blue-100 text-foreground">
                <th className="w-16 px-4 py-3 text-left font-semibold border border-gray-300">S.No</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Faculty name</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Title of Patents</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Application number</th>
                <th className="px-4 py-3 text-left font-semibold border border-gray-300">Published year</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sno} className="bg-white hover:bg-blue-50/40 transition-colors">
                  <td className="px-4 py-3 border border-gray-300">{r.sno}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.faculty}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.title}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.appNo}</td>
                  <td className="px-4 py-3 border border-gray-300">{r.year}</td>
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


