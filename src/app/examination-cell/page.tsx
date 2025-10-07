"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ArrowLeft, 
  Calendar,
  FileText,
  Download,
  BookOpen,
  ClipboardList,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
  Award,
  GraduationCap,
  Target,
  Lightbulb,
  Globe,
  MessageSquare,
  Briefcase,
  Mic,
  Brain,
  BarChart3,
  UserCheck,
  Users2,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

interface ExamItem {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface ExamSchedule {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface ExamProcedure {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface ExamCircular {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface ExamDownload {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface QuestionPaper {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface CreditRule {
  sno: number;
  title: string;
  description: string;
  link: string;
}

interface ExamResult {
  sno: number;
  title: string;
  description: string;
  link: string;
}

export default function ExaminationCellPage() {
  const [activeSection, setActiveSection] = useState("schedules");
  const [activeDepartment, setActiveDepartment] = useState("cse");

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ["schedules", "procedures", "circulars", "downloads", "question-papers", "credit-rules", "exam-results"].includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sample data for each section
  const examSchedules: ExamSchedule[] = [
    { sno: 1, title: "B.TECH EXAM TIME TABLES", description: "Click to View Schedules", link: "/assets/images/new-gif-icon-5.jpg" },
    { sno: 2, title: "M.TECH EXAM TIME TABLES", description: "Click to View Schedules", link: "/assets/images/new-gif-icon-5.jpg" },
    { sno: 3, title: "MBA EXAM TIME TABLES", description: "Click to View Schedules", link: "/assets/images/new-gif-icon-5.jpg" }
  ];

  const examProcedures: ExamProcedure[] = [
    { sno: 1, title: "Examination Conduct Rules", description: "Rules and regulations for conducting examinations", link: "#" },
    { sno: 2, title: "Student Examination Guidelines", description: "Guidelines for students appearing in examinations", link: "#" },
    { sno: 3, title: "Invigilation Procedures", description: "Procedures for invigilators during examinations", link: "#" },
    { sno: 4, title: "Answer Script Handling", description: "Procedures for handling and evaluation of answer scripts", link: "#" },
    { sno: 5, title: "Malpractice Prevention", description: "Measures to prevent malpractice during examinations", link: "#" },
    { sno: 6, title: "Examination Security Protocols", description: "Security protocols for examination halls", link: "#" },
    { sno: 7, title: "Emergency Procedures", description: "Emergency procedures during examinations", link: "#" },
    { sno: 8, title: "Examination Feedback System", description: "System for collecting examination feedback", link: "#" }
  ];

  const btechCirculars = [
    { sno: 1, date: "20-04-2025", title: "NOTIFICATION FOR M.TECH. III SEM REGULAR(2023) EXAMINATIONS -JANUARY 2025", link: "/documents/exam-circulars/btech/mtech-iii-sem-jan-2025.pdf" },
    { sno: 2, date: "03-02-2025", title: "NOTIFICATION FOR MBA I SEM REGULAR & SUPPLY AND II SEM SUPPLY EXAMINATIONS-FEB 2025", link: "/documents/exam-circulars/btech/mba-i-sem-feb-2025.pdf" },
    { sno: 3, date: "03-02-2025", title: "NOTIFICATION FOR M.TECH. I SEM REGULAR & SUPPLY AND II SEM SUPPLY EXAMINATIONS -FEB 2025", link: "/documents/exam-circulars/btech/mtech-i-sem-feb-2025.pdf" },
    { sno: 4, date: "03-02-2025", title: "Notification for 2021 - B.Tech. VII Sem(MLRS-R20) - Computer Based Test (CBT) Examinations, February 2025", link: "/documents/exam-circulars/btech/btech-vii-sem-cbt-feb-2025.pdf" },
    { sno: 5, date: "31-12-2024", title: "NOTIFICATION FOR MBA III SEM REGULAR(2023) EXAMINATIONS -JANUARY 2025", link: "/documents/exam-circulars/btech/mba-iii-sem-jan-2025.pdf" },
    { sno: 6, date: "31-12-2024", title: "NOTIFICATION FOR 2021-B.TECH VIII SEM(MLRS-R20) REGULAR EXAM - MAY 2025", link: "/documents/exam-circulars/btech/btech-viii-sem-may-2025.pdf" },
    { sno: 7, date: "31-12-2024", title: "NOTIFICATION FOR B.TECH. I SEM(MLRS-R24, R22, R20 & R19) REGULAR & SUPPLY EXAM AND II SEM(MLRS-R22, R20 & R19) SUPPLY - JAN 2025", link: "/documents/exam-circulars/btech/btech-i-sem-jan-2025.pdf" },
    { sno: 8, date: "23-11-2024", title: "NOTIFICATION FOR B.TECH. V SEM(MLRS-R22, R20 & R19) REGULAR & SUPPLY EXAM AND VI SEM(MLRS-R20 & R19) SUPPLY - DEC 24 & JAN 25", link: "/documents/exam-circulars/btech/btech-v-sem-dec-jan-2025.pdf" },
    { sno: 9, date: "04-11-2024", title: "NOTIFICATION FOR B.TECH VII SEM(MLRS-R20 & R19) REGULAR & SUPPLY EXAM - DECEMBER 2024", link: "/documents/exam-circulars/btech/btech-vii-sem-dec-2024.pdf" },
    { sno: 10, date: "28-08-2024", title: "Notification for 2021- III B.TECH II SEM(MLRS-R20) - CBT EXAMINATIONS TIME TABLE - SEP 2024", link: "/documents/exam-circulars/btech/btech-iii-sem-cbt-sep-2024.pdf" }
  ];

  const mtechCirculars = [
    { sno: 1, date: "15-12-2023", title: "Notification for II M.Tech I Sem - Regular(R22) & Supply(R20) and II M.Tech II Sem - Supply - (R20) – Feb 2024", link: "/documents/exam-circulars/mtech/mtech-ii-sem-feb-2024.pdf" },
    { sno: 2, date: "14-11-2023", title: "NOTIFICATION FOR II-II & II-I M.TECH(MLRS-R20, R19) - REG & SUPPLY EXAMINATION - NOV 2023", link: "/documents/exam-circulars/mtech/mtech-ii-sem-nov-2023.pdf" },
    { sno: 3, date: "15-07-2023", title: "NOTIFICATION FOR I-II M.TECH(MLRS-R20, R19) & I-I M.TECH(MLRS-R22, R20, R19) - SUPPLY EXAMINATION - AUG & SEP 2023", link: "/documents/exam-circulars/mtech/mtech-i-sem-aug-sep-2023.pdf" },
    { sno: 4, date: "21-06-2023", title: "NOTIFICATION FOR 2022 - I M.TECH. II SEM(MLRS-R22) - REGULAR EXAMINATION - AUG & SEP 2023", link: "/documents/exam-circulars/mtech/mtech-i-sem-aug-sep-2023.pdf" },
    { sno: 5, date: "23-02-2023", title: "Notification for II M.Tech I Sem(MLRS-R20 & R19)-Regular & Supply - April 2023", link: "/documents/exam-circulars/mtech/mtech-ii-sem-apr-2023.pdf" }
  ];

  const mbaCirculars = [
    { sno: 1, date: "15-12-2023", title: "Notification for II MBA I Sem - Regular(R22) & Supply(R20) and II MBA II Sem - Supply - (R20) – Feb 2024", link: "/documents/exam-circulars/mba/mba-ii-sem-feb-2024.pdf" },
    { sno: 2, date: "15-07-2023", title: "NOTIFICATION FOR I-II MBA(MLRS-R20, R19) & I-I MBA(MLRS-R22, R20, R19) - SUPPLY EXAMINATION - SEP 2023", link: "/documents/exam-circulars/mba/mba-i-sem-sep-2023.pdf" },
    { sno: 3, date: "21-06-2023", title: "NOTIFICATION FOR 2021 - II MBA II SEM(MLRS-R20) - REGULAR EXAMINATION - AUG & SEP 2023", link: "/documents/exam-circulars/mba/mba-ii-sem-aug-sep-2023.pdf" },
    { sno: 4, date: "21-06-2023", title: "NOTIFICATION FOR 2022 - I MBA II SEM(MLRS-R22) - REGULAR EXAMINATION - SEPTEMBER 2023", link: "/documents/exam-circulars/mba/mba-i-sem-sep-2023.pdf" },
    { sno: 5, date: "21-06-2023", title: "Notification for II MBA II Sem (MLRS-R20 & R19) Anti-Plagiarism and Project Via Voce, August-2023", link: "/documents/exam-circulars/mba/mba-ii-sem-project-aug-2023.pdf" }
  ];

  const examDownloads: ExamDownload[] = [
    { sno: 1, title: "APPLICATION FOR RE-ADMISSION", description: "Application form for re-admission to programs", link: "/documents/exam-downloads/application-re-admission.pdf" },
    { sno: 2, title: "APPLICATION FOR DUPLICATE MEMO", description: "Application form for duplicate memo requests", link: "/documents/exam-downloads/application-duplicate-memo.pdf" },
    { sno: 3, title: "APPLICATION FOR CONDONATION", description: "Application form for attendance condonation", link: "/documents/exam-downloads/application-condonation.pdf" },
    { sno: 4, title: "APPLICATION FOR TRANSCRIPTS", description: "Application form for transcript requests", link: "/documents/exam-downloads/application-transcripts.pdf" },
    { sno: 5, title: "APPLICATION FOR NAME OR GENDER CORRECTION", description: "Application form for name or gender correction", link: "/documents/exam-downloads/application-name-gender-correction.pdf" },
    { sno: 6, title: "APPLICATION FOR ELECTRONIC TRANSCRIPTS(SCANNED COPY) TO FOREIGN UNIVERISTY", description: "Application for electronic transcripts to foreign universities", link: "/documents/exam-downloads/application-electronic-transcripts-foreign.pdf" },
    { sno: 7, title: "APPLICATION FOR E-MAIL TO WES(WORLD EDUCATION SERVICES)", description: "Application for WES email services", link: "/documents/exam-downloads/application-wes-email.pdf" },
    { sno: 8, title: "APPLICATION FOR TRANSCRIPTS(HARD COPY) TO FOREIGN UNIVERISTY IN SEALED ENVELOPE", description: "Application for hard copy transcripts to foreign universities", link: "/documents/exam-downloads/application-transcripts-hardcopy-foreign.pdf" },
    { sno: 9, title: "APPLICATION FOR WES(WORLD EDUCATION SERVICES) IN SEALED ENVELOPE", description: "Application for WES services in sealed envelope", link: "/documents/exam-downloads/application-wes-sealed-envelope.pdf" }
  ];

  const questionPapers: QuestionPaper[] = [
    { sno: 1, title: "CSE Previous Question Papers - 2023", description: "Computer Science Engineering question papers from 2023", link: "#" },
    { sno: 2, title: "ECE Previous Question Papers - 2023", description: "Electronics and Communication Engineering question papers", link: "#" },
    { sno: 3, title: "ME Previous Question Papers - 2023", description: "Mechanical Engineering question papers from 2023", link: "#" },
    { sno: 4, title: "CE Previous Question Papers - 2023", description: "Civil Engineering question papers from 2023", link: "#" },
    { sno: 5, title: "IT Previous Question Papers - 2023", description: "Information Technology question papers from 2023", link: "#" },
    { sno: 6, title: "EEE Previous Question Papers - 2023", description: "Electrical and Electronics Engineering question papers", link: "#" },
    { sno: 7, title: "MBA Previous Question Papers - 2023", description: "Master of Business Administration question papers", link: "#" },
    { sno: 8, title: "M.Tech Previous Question Papers - 2023", description: "Master of Technology question papers from 2023", link: "#" }
  ];

  const creditRules: CreditRule[] = [
    { sno: 1, title: "MLRS-R24 REGULATIONS - B.TECH. (REGULAR) - CREDIT PROMOTION RULES", description: "credit promotion rules", link: "#" },
    { sno: 2, title: "MLRS-R22 REGULATIONS - B.TECH. (REGULAR) - CREDIT PROMOTION RULES", description: "credit promotion rules", link: "#" },
    { sno: 3, title: "MLRS-R20 REGULATIONS - B.TECH. (REGULAR) - CREDIT PROMOTION RULES", description: "credit promotion rules", link: "#" },
    { sno: 4, title: "MLRS-R20 REGULATIONS - B.TECH. (LATERAL ENTRY) - CREDIT PROMOTION RULES", description: "credit promotion rules", link: "#" }
  ];

  const examResults: ExamResult[] = [
    { sno: 1, title: "JNTUH - EB - Intimation of approval for I-I, II-I & IV-II Results - FEB, MARCH & APRIL 2023", description: "13-07-2023", link: "/assets/images/new-gif-icon-5.jpg" },
    { sno: 2, title: "JNTUH - EB - Intimation of approval for III-I(R20) & IV-I(R19) Results - NOV, DEC 2022", description: "11.04.2023", link: "/assets/images/new-gif-icon-5.jpg" }
  ];

  const sidebarItems = [
    { id: "schedules", name: "Exam Schedules", icon: Calendar },
    { id: "procedures", name: "Examination Procedures", icon: ClipboardList },
    { id: "circulars", name: "Circulars/Notifications", icon: AlertCircle },
    { id: "downloads", name: "Exam Downloads", icon: Download },
    { id: "question-papers", name: "Previous Question Papers", icon: BookOpen },
    { id: "credit-rules", name: "Credit Promotion Rules", icon: Award },
    { id: "exam-results", name: "End Exam Results", icon: CheckCircle }
  ];

  const departments = [
    { id: "cse", name: "CSE", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030004-R-P&S-Feb,2022", "2030010-R-BEFA-Feb,2022", "2030503-R-DBMS-Feb,2022",
        "2030504-R-DLD-Feb,2022", "2030505-R-PP-Feb,2022", "2030506-R-DM-Feb,2022",
        "2030510-R-OS-Feb,2022", "2030511-R-CN-Feb,2022", "2036201-R-DLDCO-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030004-S-P&S-July,2022", "2030010-S-BEFA-July,2022", "2030503-S-DBMS-July,2022",
        "2030504-S-DLD-July,2022", "2030505-S-PP-July,2022", "2030506-S-DM-July,2022",
        "2030510-S-OS-July,2022", "2030511-S-CN-July,2022", "2036201-S-DLDCO-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040010-R-BEFA-July,2022", "2040201-R-BEE-July,2022", "2040503-R-DBMS-July,2022",
        "2040506-R-DM-July,2022", "2040507-R-COMP-July,2022", "2040508-R-DAA-July,2022",
        "2040509-R-JP-July,2022", "2040543-R-AI-July,2022", "2040547-R-CNS-July,2022",
        "2046202-R-CLE-July,2022", "2046601-R-CV-July,2022", "2046602-R-ATLP-July,2022",
        "2046701-R-IDS-July,2022", "2046702-R-DWDM-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050503-R-DBMS-Dec,2022", "2050505-R-PP-Dec,2022", "2050508-R-DAA-Dec,2022",
        "2050510-R-OS-Dec,2022", "2050511-R-CN-Dec,2022", "2050512-R-FLAT-Dec,2022",
        "2050513-R-SE-Dec,2022", "2050518-R-ML-Dec,2022", "2050543-R-AI-Dec,2022",
        "2050544-R-IRS-Dec,2022", "2056202-R-DBS-Dec,2022", "2056602-R-ATLP-Dec,2022",
        "2060101-R-ANPC-Dec,2022"
      ]},
      { semester: "R-19 II Year I Sem Regular", papers: [
        "1930514-R-OOP C++-Mar,2021", "1930405-R-ADE-Mar,2021", "1930511-R-DS-Mar,2021",
        "1930512-R-COSM-Mar,2021", "1930513-R-COA-Mar,2021"
      ]}
    ]},
    { id: "ece", name: "ECE", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030003-R-LTSSCV-Feb,2022", "2030201-R-BEE-Feb,2022", "2030411-R-EDC-Feb,2022",
        "2030412-R-SS-Feb,2022", "2030509-R-JP-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030003-S-LTSSCV-July,2022", "2030201-S-BEE-July,2022", "2030411-S-EDC-July,2022",
        "2030412-S-SS-July,2022", "2030509-S-JP-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040401-R-APC-July,2022", "2040413-R-ADC-July,2022", "2040414-R-DSD-July,2022",
        "2040415-R-EMTL-July,2022", "2040505-R-PP-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050010-R-BEFA-Dec,2022", "2050209-R-CS-Dec,2022", "2050416-R-LDICA-Dec,2022",
        "2050417-R-PTSP-Dec,2022", "2050442-R-EMI-Dec,2022"
      ]}
    ]},
    { id: "eee", name: "EEE", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030003-R-LTSSCV-Feb,2022", "2030204-R-NA-Feb,2022", "2030205-R-EM I-Feb,2022",
        "2030402-R-AE-Feb,2022", "2030502-R-DS-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030003-S-LTSSCV-July,2022", "2030204-S-NA-July,2022", "2030205-S-EM I-July,2022",
        "2030402-S-AE-July,2022", "2030502-S-DS-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040206-R-EMF-July,2022", "2040207-R-EM II-July,2022", "2040407-R-DEICA-July,2022",
        "2040412-R-SS-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050010-R-BEFA-Dec,2022", "2050208-R-PS I-Dec,2022", "2050209-R-CS-Dec,2022",
        "2050403-R-MPMC-Dec,2022"
      ]}
    ]},
    { id: "it", name: "IT", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030004-R-P&S-Feb,2022", "2030010-R-BEFA-Feb,2022", "2030503-R-DBMS-Feb,2022",
        "2030504-R-DLD-Feb,2022", "2030505-R-PP-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030004-S-P&S-July,2022", "2030010-S-BEFA-July,2022", "2030503-S-DBMS-July,2022",
        "2030504-S-DLD-July,2022", "2030505-S-PP-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040201-R-BEE-July,2022", "2040506-R-DM-July,2022", "2040507-R-COMP-July,2022",
        "2040508-R-DAA-July,2022", "2040509-R-JP-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050510-R-OS-Dec,2022", "2050511-R-CN-Dec,2022", "2050512-R-FLAT-Dec,2022",
        "2050513-R-SE-Dec,2022"
      ]}
    ]},
    { id: "mech", name: "MECH", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030005-R-PDCV-Feb,2022", "2030202-R-BEEE-Feb,2022", "2030301-R-EM-Feb,2022",
        "2030311-R-TDy-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030005-S-PDCV-July,2022", "2030202-S-BEEE-July,2022", "2030301-S-EM-July,2022",
        "2030311-S-TDy-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040312-R-MOS-July,2022", "2040314-R-KOM-July,2022", "2040315-R-TE I-July,2022",
        "2040316-R-PT-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050317-R-DMM I-DEC,2022", "2050318-R-MMT-DEC,2022", "2050319-R-DOM-DEC,2022",
        "2050320-R-TE II-DEC,2022", "2050321-R-FMHM-DEC,2022", "2050344-R-NDT-DEC,2022"
      ]}
    ]},
    { id: "civil", name: "CIVIL", papers: [
      { semester: "R-20 II Year I Sem Regular", papers: [
        "2030112-R-SM I-Feb,2022", "2030113-R-S&G-Feb,2022", "2030202-R-BEEE-Feb,2022",
        "2030502-R-DS-Feb,2022"
      ]},
      { semester: "R-20 II Year I Sem Supply", papers: [
        "2030112-S-SOM I-July,2022", "2030113-S-S&G-July,2022", "2030202-S-BEEE-July,2022",
        "2030502-S-DS-July,2022"
      ]},
      { semester: "R-20 II Year II Sem Regular", papers: [
        "2040114-R-SOM II-July,2022", "2040115-R-BMCP-July,2022", "2040116-R-FM-July,2022",
        "2040117-R-SA I-July,2022", "2040118-R-EG-July,2022"
      ]},
      { semester: "R-20 III Year I Sem Regular", papers: [
        "2050010-R-BEFA-Dec,2022", "2050119-R-HHM-Dec,2022", "2050120-R-SA II-Dec,2022",
        "2050121-R-SE I-Dec,2022", "2050141-R-CT-Dec,2022"
      ]}
    ]},
    { id: "mba", name: "MBA", papers: [
      { semester: "Available Semesters", papers: [
        "R-20 II Year I Sem Regular", "R-20 II Year I Sem Supply", "R-20 II Year II Sem Regular",
        "R-20 III Year I Sem Regular", "R-19 II Year I Sem Regular", "R-19 II Year I Sem Supply",
        "R-19 II Year II Sem Regular", "R-19 II Year II Sem Supply", "R-19 III Year I Sem Regular",
        "R-19 III Year I Sem Supply", "R-19 III Year II Sem Regular", "R-19 III Year II Sem Supply",
        "R-19 IV Year I Sem Regular"
      ]}
    ]},
    { id: "mtech", name: "M.TECH", papers: [
      { semester: "Available Semesters", papers: [
        "R-20 II Year I Sem Regular", "R-20 II Year I Sem Supply", "R-20 II Year II Sem Regular"
      ]}
    ]}
  ];

  const renderTable = (data: any[], sectionName: string) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-foreground">{sectionName}</h4>
          <Badge variant="secondary" className="text-sm">
            {data.length} Items
          </Badge>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">S.No</TableHead>
                <TableHead className="min-w-48">Title</TableHead>
                <TableHead className="min-w-64">Description</TableHead>
                <TableHead className="w-24 text-center">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow 
                  key={item.sno} 
                  className="hover:bg-muted/50 cursor-pointer"
                  onClick={() => item.link && window.open(item.link, '_blank')}
                >
                  <TableCell className="font-medium">{item.sno}</TableCell>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell className="text-muted-foreground">{item.description}</TableCell>
                  <TableCell className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.link) window.open(item.link, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );

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
            Examination Cell
          </h1>
          <p className="text-xl text-primary font-semibold mb-6">
            Ensuring Fair and Transparent Examination Process
          </p>
        </motion.div>

        {/* Main Content with Sidebar */}
        <motion.div
          className="grid lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Sidebar Navigation */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* The main card container */}
            <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
              {/* Header bar */}
              <div className="bg-[#127fa5] text-white px-4 py-2 flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-white" />
                <h3 className="text-base font-semibold tracking-wide">Examination Cell</h3>
              </div>
              {/* List container with compact spacing */}
              <ul className="p-4 space-y-2">
                {sidebarItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.li
                      key={item.id}
                      className={`group flex items-center gap-2 text-foreground/80 rounded-md px-2 py-1 border border-transparent hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-colors cursor-pointer ${
                        activeSection === item.id ? 'bg-primary/10 border-primary/30 text-primary' : ''
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.06 }}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {/* small bullet */}
                      <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform ${
                        activeSection === item.id ? 'bg-primary' : 'bg-primary'
                      }`}></span>
                      <span className="text-sm px-1 py-0.5 rounded group-hover:text-primary group-hover:underline underline-offset-2 transition-colors">
                        {item.name}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Exam Schedules */}
            {activeSection === "schedules" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Exam Schedules</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                {renderTable(examSchedules, "Examination Schedules")}
              </div>
            )}

            {/* Examination Procedures */}
            {activeSection === "procedures" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Examination Procedures</h3>
                </div>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <ClipboardList className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Examination Procedures</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            The office of "The Controller of Examinations" has been established from the month of June 2016 since the conferment of Autonomous to the institution. The Controller of Examinations (COE) office is responsible for the announcement of academic calendar, preparation of question papers, conduction of continuous internal assessment (CIA) tests and semester end examinations (SEE), valuations of answer scripts, announcement of results, printing and issuing of grade sheets to the students and recommendations to the University for the award of degrees.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Examination Schedule</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            There shall be examinations at the end of each semester, for odd semesters in the month of October/November; for even semesters in April/ May. A candidate who does not pass the examination in any course(s) may be permitted to appear in such failed course(s) in the subsequent examinations to be held in October / November or April / May. However candidates who have arrears in Practical's shall be permitted to take their arrear Practical examination only along with Regular Practical examination in the respective semester.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Attendance Requirements and Detention Policy</h4>
                          <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                              It is desirable for a candidate to put on 100% attendance in each course. In every course (theory/laboratory), student has to maintain a minimum of 75% attendance including the days of attendance in sports, games, NCC and NSS activities to be eligible for appearing in Semester End Examination of the course.
                            </p>
                            <p>
                              For cases of medical issues, deficiency of attendance in each course to the extent of 10% may be condoned by the College Academic Committee (CAC) on the recommendation of Head of the department if their attendance is between 75% to 65% in every course, subjected to submission of medical certificates, medical case file and other needful documents to the concerned departments.
                            </p>
                            <p>
                              The basis for the calculation of the attendance shall be the period prescribed by the institute by its calendar of events. For late admission, attendance is reckoned from the date of admission to the program.
                            </p>
                            <p>
                              However, in case of a student having less than 65% attendance in any course, s/he shall be detained in the course and in no case such process will be relaxed. A candidate shall put in a minimum required attendance at least three (3) theory courses for getting promoted to next higher class / semester. Otherwise, s/he shall be declared detained and has to repeat semester. Students whose shortage of attendance is not condoned in any subject are not eligible to write their semester end examination of that courses and their registration shall stand cancelled.
                            </p>
                            <p>
                              A student not be promoted to the next semester may seek readmission into that semester when offered next. If any candidate fulfills the attendance requirement in the present semester, he shall not be eligible for readmission into the same class. Any student against whom any disciplinary action by the institute is pending shall not be permitted to attend any SEE in that semester.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Circulars/Notifications */}
            {activeSection === "circulars" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Circulars/Notifications</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                {/* B.Tech Circulars */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-foreground">B.Tech Circulars/Notifications</h4>
                      <Badge variant="secondary" className="text-sm">
                        {btechCirculars.length} Items
                      </Badge>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16">S.No</TableHead>
                            <TableHead className="w-32">Updated Date</TableHead>
                            <TableHead className="min-w-96">B.Tech Circular/Notification</TableHead>
                            <TableHead className="w-24 text-center">Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {btechCirculars.map((item) => (
                            <TableRow 
                              key={item.sno} 
                              className="hover:bg-muted/50 cursor-pointer"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              <TableCell className="font-medium">{item.sno}</TableCell>
                              <TableCell className="text-muted-foreground">{item.date}</TableCell>
                              <TableCell className="font-medium hover:text-primary transition-colors">{item.title}</TableCell>
                              <TableCell className="text-center">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(item.link, '_blank');
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* M.Tech Circulars */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-foreground">M.Tech Circulars/Notifications</h4>
                      <Badge variant="secondary" className="text-sm">
                        {mtechCirculars.length} Items
                      </Badge>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16">S.No</TableHead>
                            <TableHead className="w-32">Updated Date</TableHead>
                            <TableHead className="min-w-96">M.Tech Circular/Notification</TableHead>
                            <TableHead className="w-24 text-center">Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mtechCirculars.map((item) => (
                            <TableRow 
                              key={item.sno} 
                              className="hover:bg-muted/50 cursor-pointer"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              <TableCell className="font-medium">{item.sno}</TableCell>
                              <TableCell className="text-muted-foreground">{item.date}</TableCell>
                              <TableCell className="font-medium hover:text-primary transition-colors">{item.title}</TableCell>
                              <TableCell className="text-center">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(item.link, '_blank');
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* MBA Circulars */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-foreground">MBA Circulars/Notifications</h4>
                      <Badge variant="secondary" className="text-sm">
                        {mbaCirculars.length} Items
                      </Badge>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16">S.No</TableHead>
                            <TableHead className="w-32">Updated Date</TableHead>
                            <TableHead className="min-w-96">MBA Circular/Notification</TableHead>
                            <TableHead className="w-24 text-center">Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mbaCirculars.map((item) => (
                            <TableRow 
                              key={item.sno} 
                              className="hover:bg-muted/50 cursor-pointer"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              <TableCell className="font-medium">{item.sno}</TableCell>
                              <TableCell className="text-muted-foreground">{item.date}</TableCell>
                              <TableCell className="font-medium hover:text-primary transition-colors">{item.title}</TableCell>
                              <TableCell className="text-center">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(item.link, '_blank');
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Exam Downloads */}
            {activeSection === "downloads" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Exam Downloads</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Exam Branch Online Services and Mandatory Downloads</h4>
                      <p className="text-muted-foreground">Download various application forms and documents required for examination-related services.</p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-md font-semibold text-foreground">Available Downloads</h5>
                      <Badge variant="secondary" className="text-sm">
                        {examDownloads.length} Items
                      </Badge>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16">S.No</TableHead>
                            <TableHead className="min-w-64">Title</TableHead>
                            <TableHead className="min-w-80">Description</TableHead>
                            <TableHead className="w-24 text-center">Link</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {examDownloads.map((item) => (
                            <TableRow 
                              key={item.sno} 
                              className="hover:bg-muted/50 cursor-pointer"
                              onClick={() => window.open(item.link, '_blank')}
                            >
                              <TableCell className="font-medium">{item.sno}</TableCell>
                              <TableCell className="font-medium hover:text-primary transition-colors">{item.title}</TableCell>
                              <TableCell className="text-muted-foreground">{item.description}</TableCell>
                              <TableCell className="text-center">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(item.link, '_blank');
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Previous Question Papers */}
            {activeSection === "question-papers" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Previous Question Papers</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Click here for more recent Question Papers with key</h4>
                      <p className="text-muted-foreground">Access previous year question papers organized by department and semester.</p>
                    </div>

                    {/* Department Tabs */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 border-b border-gray-200">
                        {departments.map((dept) => (
                          <button
                            key={dept.id}
                            onClick={() => setActiveDepartment(dept.id)}
                            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                              activeDepartment === dept.id
                                ? 'border-primary text-primary bg-primary/5'
                                : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'
                            }`}
                          >
                            {dept.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Department Content */}
                    <div className="space-y-6">
                      {departments
                        .filter(dept => dept.id === activeDepartment)
                        .map((dept) => (
                          <div key={dept.id}>
                            <h5 className="text-lg font-bold text-primary mb-4 border-b border-primary/20 pb-2">
                              {dept.name} Question Papers
                            </h5>
                            
                            {dept.papers.map((semesterData, index) => (
                              <div key={index} className="mb-6">
                                <h6 className="text-md font-semibold text-foreground mb-3 bg-gray-50 px-3 py-2 rounded">
                                  {semesterData.semester}
                                </h6>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                  {semesterData.papers.map((paper, paperIndex) => (
                                    <div 
                                      key={paperIndex}
                                      className="p-3 bg-muted/30 rounded hover:bg-primary/10 cursor-pointer transition-colors border border-transparent hover:border-primary/20"
                                      onClick={() => window.open(`/documents/question-papers/${dept.id.toLowerCase()}/${semesterData.semester.toLowerCase().replace(/\s+/g, '-')}/${paper}.pdf`, '_blank')}
                                    >
                                      <span className="text-sm font-medium hover:text-primary block">{paper}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Credit Promotion Rules */}
            {activeSection === "credit-rules" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Credit Promotion Rules</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                {renderTable(creditRules, "Credit Promotion Rules")}
              </div>
            )}

            {/* End Exam Results */}
            {activeSection === "exam-results" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">End Exam Results</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                {renderTable(examResults, "Examination Results")}
              </div>
            )}

          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
