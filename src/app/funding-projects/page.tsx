"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

type Row = {
  sno: number;
  title: string;
  agency: string;
  pi: string;
  coPi: string;
  amount: string;
  duration: string;
};

const Table = ({ caption, data }: { caption: string; data: Row[] }) => (
  <div className="mb-12">
    <h2 className="text-xl font-semibold mb-3">{caption}</h2>
    <div className="overflow-x-auto rounded-md border border-gray-300">
      <table className="min-w-full text-sm border-collapse">
        <thead>
          <tr className="bg-blue-100 text-foreground">
            <th className="w-16 px-4 py-3 text-left font-semibold border border-gray-300">S.NO</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Title of project</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Funding agency</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Principal investigator</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Co principal investigator</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Amount</th>
            <th className="px-4 py-3 text-left font-semibold border border-gray-300">Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={`${caption}-${r.sno}`} className="bg-white hover:bg-blue-50/40 transition-colors">
              <td className="px-4 py-3 border border-gray-300">{r.sno}</td>
              <td className="px-4 py-3 border border-gray-300">{r.title}</td>
              <td className="px-4 py-3 border border-gray-300">{r.agency}</td>
              <td className="px-4 py-3 border border-gray-300">{r.pi}</td>
              <td className="px-4 py-3 border border-gray-300">{r.coPi}</td>
              <td className="px-4 py-3 border border-gray-300">{r.amount}</td>
              <td className="px-4 py-3 border border-gray-300">{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function FundingProjectsPage() {
  const y2022_23: Row[] = [
    { sno: 1, title: "Agri Innovation Hub for Development of Scheduled Tribe (ST) Community in Narsampet Block, Warangal District, Telangana State", agency: "DST-SEED/STI-HUB", pi: "Dr. G Narsinga Rao / Dr. V. Varalakshmi", coPi: "Dr. G. Amarnath / Dr. G. Suryapraksh Rao / Dr. K. Venkateswara Reddy", amount: "2,98,67,113/-", duration: "2021-2024" },
    { sno: 2, title: "Development of a Wireless Sensor Network with Cognitive Radio Functionalities for Improving the Sensing Performance in Noisy and fading environments", agency: "SERB/EEQ", pi: "Dr. N. Srinivas", coPi: "Dr. G. Amarnath", amount: "15,78,500", duration: "2022-2025" },
    { sno: 3, title: "Demonstration & popularization of Science through expos, models, competitions for secondary school students", agency: "DST-NCSTC", pi: "Dr. G Narsinga Rao", coPi: "Dr. Vinod Adla", amount: "16,48,500", duration: "2021-2022" },
    { sno: 4, title: "Through Hands-On Learning, Teacher Ignite a Passion for Science based on model approaches for the secondary school science teachers", agency: "DST-NCSTC", pi: "Dr.K.Suresh Babu", coPi: "Dr.K.Ashok", amount: "19,42,380", duration: "2021-2022" },
    { sno: 5, title: "Economic and Social upliftment of Masons through Eco-friendly Construction Materials and Skill Development with Special Focus on SC Community in Medchal Mandal, Medchal-Malkajgiri District, Telangana State.", agency: "DST- SEED", pi: "Dr.M.Sarvanan", coPi: "Dr.V.Varalakshmi / Dr.R.GOPI", amount: "55,98,352", duration: "Mar 2021 – Mar 2024" },
    { sno: 6, title: "Development of Low Cost Weeder Machine for the Region of Nuthankal, Dharmavaram and Gummadidala Villages of SC Community.", agency: "DST- SEED", pi: "Dr.S.P.JANI", coPi: "Dr.A. NALLA THAMBI / Dr.P.S.SHIJIN KUMAR / Mr.V.RAKESH", amount: "50,41,850", duration: "Mar 2021 – Mar 2024" },
  ];

  const y2021_22: Row[] = [
    ...y2022_23,
    { sno: 5, title: "Exploring Science Communication in Childrens of Dundigal and Surrounding villages of Medchal  District Telangana State Through Children Centric outreach programme", agency: "DST-NCSTC", pi: "Dr.G.Amranath", coPi: "Dr.Nallgonda srinivas Rao", amount: "14,13,250", duration: "2021-2022" },
  ];

  const y2020_21: Row[] = [
    { sno: 1, title: "Economic and Social upliftment of Masons through Eco-friendly Construction Materials and Skill Development with Special Focus on SC Community in Medchal Mandal, Medchal-Malkajgiri District, Telangana State.", agency: "DST- SEED", pi: "Dr.M.Sarvanan", coPi: "Dr.V.Varalakshmi / Dr.R.GOPI", amount: "43,38,750", duration: "Mar 2021 – Mar 2024" },
    { sno: 2, title: "Development of Low Cost Weeder Machine for the Region of Nuthankal, Dharmavaram and Gummadidala Villages of SC Community.", agency: "DST- SEED", pi: "Dr.S.P.JANI", coPi: "Dr.A. NALLA THAMBI / Dr.P.S.SHIJIN KUMAR / Mr.V.RAKESH", amount: "50,41,850", duration: "Mar 2021 – Mar 2024" },
    { sno: 3, title: "STTP on Artificial Intelligence: Devices to Circuits", agency: "AICTE", pi: "Dr.G.Amarnath", coPi: "Dr.P.S. shjin Kumar", amount: "2,71,667", duration: "2020-2021" },
    { sno: 4, title: "Green Synthesis of silver/gold Nanoparticles by using Asclepiad-aceae medicinal plant to enhancement of physical properties", agency: "DST- WOS A", pi: "Mrs.CH HEMALATHA", coPi: "Dr.G.Narsinga Rao", amount: "18,50,000", duration: "2018-2021" },
  ];

  const y2019_20: Row[] = [
    { sno: 1, title: "Green synthasis of silver/gold Nanoparticles by using Asclepiad-acae medicinal plant to enhancement of physical preporties", agency: "DST-WOS", pi: "Mrs.CH Hemalatha", coPi: "Dr.G.Narsinga Rao", amount: "18,50,000", duration: "2018-2021" },
    { sno: 2, title: "Colossa multiferric nano structured materia;lls for miniaturizing engineering devices", agency: "SERB-ECR", pi: "Dr.G.Narsinga Rao", coPi: "–", amount: "49,01,875", duration: "2017-2020" },
    { sno: 3, title: "Economic empowerment of rural women of Quthbullapur Mandal (Rangareddy district, Telangana State) through value addition to  unutilised biomass from fresh water ponds/lakes and waste water management technologies", agency: "DST-SEED", pi: "MLRITM", coPi: "Dr.V.Varalakshmi / Dr.K.Venkateswara Reddy", amount: "55,98,352", duration: "2016-2019" },
    { sno: 4, title: "Efficient detection of DDoS attacks Application Layer Attacks", agency: "SERB-ECR", pi: "Dr.C.Balarengadurai", coPi: "–", amount: "26,24,400", duration: "2016-2020" },
    { sno: 5, title: "Real time Disaster Management System using ADHOC Sensor Networks", agency: "SERB-ECR", pi: "Dr.M.Nagalakshmi", coPi: "–", amount: "29,54,880", duration: "2017-2020" },
  ];

  const y2018_19: Row[] = [
    { sno: 1, title: "International conference on recent advances in materials & manufacturing Technologies ICRAMMT-2018", agency: "DST-SEMINAR", pi: "Dr.G.Nageswara Rao", coPi: "–", amount: "2,00,000", duration: "2018-2019" },
    { sno: 2, title: "Green synthasis of silver/gold Nanoparticles by using Asclepiad-acae medicinal plant to enhancement of physical preporties", agency: "DST-WOS", pi: "Mrs. Hemalatha", coPi: "Dr.G.Narsinga Rao", amount: "18,50,000", duration: "2018-2021" },
    { sno: 3, title: "Colossa multiferric nano structured materia;lls for miniaturizing engineering devices", agency: "SERB-ECR", pi: "Dr.G.Narsinga Rao", coPi: "–", amount: "49,01,875", duration: "2017-2020" },
    { sno: 4, title: "Economic empowerment of rural women of Quthbullapur Mandal (Rangareddy district, Telangana State) through value addition to  unutilised biomass from fresh water ponds/lakes and waste water management technologies", agency: "DST-SEED", pi: "MLRITM", coPi: "Dr.V.Varalakshmi / Dr.K.Venkateswara Reddy", amount: "55,98,352", duration: "2016-2019" },
    { sno: 5, title: "Efficient detection of DDoS attacks Application Layer Attacks", agency: "SERB-ECR", pi: "Dr.C.Balarengadurai", coPi: "–", amount: "26,24,400", duration: "2016-2020" },
    { sno: 6, title: "Real time Disaster Management System using ADHOC Sensor Networks", agency: "SERB-ECR", pi: "Dr.M.Nagalakshmi", coPi: "–", amount: "29,54,880", duration: "2017-2020" },
  ];

  const y2017_18: Row[] = [
    { sno: 1, title: "International conference on recent advances in materials, Mechanical & Civil Engineering –ICRAMMCE-2017", agency: "DST-SEMINAR", pi: "Dr.G.Nageswara Rao", coPi: "–", amount: "1,00,000", duration: "2017-2018" },
    { sno: 2, title: "Colossa multiferric nano structured materia;lls for miniaturizing engineering devices", agency: "SERB-ECR", pi: "Dr.G.Narsinga Rao", coPi: "–", amount: "49,01,875", duration: "2017-2020" },
    { sno: 3, title: "Economic empowerment of rural women of Quthbullapur Mandal (Rangareddy district, Telangana State) through value addition to  unutilised biomass from fresh water ponds/lakes and waste water management technologies", agency: "DST-SEED", pi: "MLRITM", coPi: "Dr.V.Varalakshmi / Dr.K.Venkateswara Reddy", amount: "55,98,352", duration: "2016-2019" },
    { sno: 4, title: "Efficient detection of DDoS attacks Application Layer Attacks", agency: "SERB-ECR", pi: "Dr.C.Balarengadurai", coPi: "–", amount: "26,24,400", duration: "2016-2020" },
    { sno: 5, title: "Real time Disaster Management System using ADHOC Sensor Networks", agency: "SERB-ECR", pi: "Dr.M.Nagalakshmi", coPi: "–", amount: "—", duration: "2017-2020" },
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Funding Projects</h1>
        </motion.div>

        <Table caption="2022-2023" data={y2022_23} />
        <Table caption="2021-22" data={y2021_22} />
        <Table caption="2020-21" data={y2020_21} />
        <Table caption="2019-20" data={y2019_20} />
        <Table caption="2018-19" data={y2018_19} />
        <Table caption="2017-18" data={y2017_18} />
      </div>

      <ContactFooter />
    </div>
  );
}


