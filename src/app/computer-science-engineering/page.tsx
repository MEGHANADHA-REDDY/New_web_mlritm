"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Building, Globe, ArrowLeft, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FacultySection from "@/components/FacultySection";
import ContactFooter from "@/components/ContactFooter";
import DepartmentPlacementSection from "@/components/DepartmentPlacementSection";
import { id } from "date-fns/locale";

export default function ComputerScienceEngineeringPage() {
  const departmentData = {
    id: "cse",
    name: "Computer Science & Engineering Department",
    image: "/images/departments/cse.jpg",
    tagline: "Innovating the Digital Future",
    description: "Computer Science & Engineering is a dynamic field that encompasses the study of computational systems, software development, algorithms, and computer hardware. Our department focuses on preparing students for careers in software engineering, artificial intelligence, cybersecurity, data science, and emerging technologies. We emphasize hands-on learning, industry collaboration, and cutting-edge research to develop the next generation of computer scientists and engineers.",
    quote: {
      text: "The computer was born to solve problems that did not exist before",
      author: "Bill Gates"
    },
    DepartmentMenu: [
    {id:"DepartmentHome",name:"Department Home",href:"/computer-science-engineering"},
    {id:"Success-in-CSE",name:"Follow the Path to Success in CSE",href:"CSE/Success-in-CSE"},
    {id:"Vision & Mission",name:"Vision & Mission",href:"CSE/Vision-Mission"},
    {id:"History of the Department",name:"History of the Department",href:"CSE/History"},
    {id:"NBA Accreditation",name:"NBA Accreditation",href:"CSE/Nba"},
    {id:"Departmental Advisory Board",name:"Departmental Advisory Board",href:"CSE/Advisory-Board"},
    {id:"Program Assessment and Quality Improvement Committee",name:"CSE/Program Assessment and Quality Improvement Committee",href:"/PAQIC"},
    {id:"Course Expert Team",name:"Course Expert Team",href:"CSE/Course-Expert-Team"},
    {id:"Academic Integrity Panel",name:"Academic Integrity Panel",href:"CSE/AIP"},
    {id:"Department Committees",name:"Department Committees",href:"CSE/Department-Committes"},
    {id:"Faculty Profiles",name:"Faculty Profiles",href:"CSE/Faculty-profiles"},
    {id:"Alternative Assessment Tool (AAT)",name:"Alternative Assessment Tool (AAT)",href:"CSE/AAT"},
    {id:"Roll of Honour",name:"Roll of Honour",href:"CSE/Roll-of-Honour"},
    {id:"Contact HoD",name:"Contact HoD",href:"CSE/Contact-hod"},    
    ],
    history: "The Department of Computer Science & Engineering was established to provide quality education in the rapidly evolving field of computing. Our department has grown to become one of the leading centers for computer science education, offering comprehensive programs that combine theoretical knowledge with practical applications in software development, systems design, and emerging technologies.",
    programs: [
      "B.Tech in Computer Science & Engineering (Intake: 270 students)",
      "M.Tech in Computer Science & Engineering (Intake: 6 students)",      
    ],
    highlights: [
      "State-of-the-art computer laboratories with latest hardware and software",
      "Expert faculty with industry and research experience",
      "Strong industry partnerships with leading tech companies",
      "Focus on emerging technologies like AI, ML, and Data Science",
      "Advanced programming languages and development tools training",
      "Cybersecurity and network security expertise",
      "Software engineering and system design methodologies",
      "Research opportunities in cutting-edge computing technologies"
    ],
    faculty: "50+",
    students: "1200+",
    BTechIntake: "270",
    placementRate: "95%+",
    vision: "To be a leading center of excellence in Computer Science & Engineering education, fostering innovation, research, and preparing globally competent professionals who can contribute to the advancement of technology and society.",
    mission: [
      "Provide quality education in computer science and engineering fundamentals",
      "Foster innovation and research in emerging technologies",
      "Develop industry-ready professionals through practical training and projects",
      "Promote ethical computing practices and societal responsibility",
      "Establish strong industry-academia partnerships for mutual growth"
    ],
    achievements: [
      "NBA Accredited Program with excellent academic standards",
      "Consistent 95%+ placement record in top IT companies",
      "Students placed in companies like Google, Microsoft, Amazon, Infosys, TCS",
      "Active research publications in international journals and conferences",
      "Industry-sponsored projects and internships worth ₹1+ Crore",
      "Winner of national and international programming competitions",
      "Active participation in professional bodies like ACM, IEEE",
      "Collaboration with international universities for research and exchange programs"
    ]
  };

  const placementData = {
    notifications: [
      {
        id: "1",
        title: "Google Campus Drive - CSE Department",
        date: "2024-12-15",
        description: "Google is conducting campus placement drive for Software Engineer roles in CSE department"
      },
      {
        id: "2",
        title: "Microsoft Placement Drive Schedule",
        date: "2024-12-10",
        description: "Microsoft campus drive scheduled for December 20th, 2024 for CSE students"
      },
      {
        id: "3",
        title: "Amazon Interview Process - CSE",
        date: "2024-12-05",
        description: "Amazon interview process details and preparation guidelines for CSE students"
      }
    ],
    reviews: [
      {
        id: "1",
        title: "Google Interview Experience - CSE Alumni",
        date: "2024-11-28",
        description: "Read about the Google interview process and preparation tips from our CSE alumni"
      },
      {
        id: "2",
        title: "Microsoft Placement Review 2024",
        date: "2024-11-20",
        description: "Comprehensive review of Microsoft placement process and success stories"
      }
    ],
    selectedStudents: [
      {
        year: "2019-21",
        totalStudents: 120,
        placedStudents: 96,
        placementRate: 80,
        avgPackage: "₹6.2 LPA",
        highestPackage: "₹25 LPA",
        topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra"]
      },
      {
        year: "2021-22",
        totalStudents: 135,
        placedStudents: 108,
        placementRate: 80,
        avgPackage: "₹6.8 LPA",
        highestPackage: "₹28 LPA",
        topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"]
      },
      {
        year: "2022-23",
        totalStudents: 150,
        placedStudents: 128,
        placementRate: 85,
        avgPackage: "₹7.2 LPA",
        highestPackage: "₹32 LPA",
        topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture"]
      },
      {
        year: "2023-24",
        totalStudents: 160,
        placedStudents: 144,
        placementRate: 90,
        avgPackage: "₹7.8 LPA",
        highestPackage: "₹38 LPA",
        topCompanies: ["Microsoft", "Amazon", "TCS", "Infosys", "Wipro"]
      },
      {
        year: "2024-25",
        totalStudents: 170,
        placedStudents: 160,
        placementRate: 94,
        avgPackage: "₹8.5 LPA",
        highestPackage: "₹45 LPA",
        topCompanies: ["Amazon", "Microsoft", "Google", "TCS", "Infosys"]
      }
    ]
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
          <blockquote className="border-l-4 border-primary pl-6 mb-6 italic text-muted-foreground">
            <p className="text-lg">"{departmentData.quote.text}"</p>
            <footer className="text-sm mt-2 text-primary font-medium">
              — {departmentData.quote.author}
            </footer>
          </blockquote>
        </motion.div>

        {/* Main Content Grid - Image Left, Text Right */}
        <motion.div 
          className="grid lg:grid-cols-4 gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/*Left Side Menu */}
         <motion.div
  className="lg:col-span-1 space-y-6 "
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  {/* The main card container */}
  <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
    {/* Header bar */}
    <div className="bg-[#127fa5] text-white px-4 py-2 flex items-center gap-2">
      <BookOpen className="w-4 h-4 text-white" />
      <h3 className="text-base font-semibold tracking-wide">Computer Science and Engineering</h3>
    </div>
    {/* List container with compact spacing */}
    <ul className="p-4 space-y-2">
      {departmentData.DepartmentMenu.map((menuItem, index) => (
        <motion.li
          key={menuItem.id}
          className="group flex items-center gap-2 text-foreground/80 rounded-md px-2 py-1 border border-transparent hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-colors"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.06 }}
        >
          {/* small bullet */}
          <span className="w-1.5 h-1.5 bg-primary rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform"></span>
          <Link href={menuItem.href} className="text-sm px-1 py-0.5 rounded group-hover:text-primary group-hover:underline underline-offset-2 transition-colors">
            {menuItem.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
</motion.div>
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
             {/* Overview */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code className="w-8 h-8 text-primary" />
                Department Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {departmentData.description}
              </p>
            </div>

            {/* Programs Offered */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Programs Offered
              </h3>
              <ul className="space-y-3">
                {departmentData.programs.map((program, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="text-base">{program}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            {/* <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                {departmentData.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div> */}
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

        {/* Placement Section */}
        <DepartmentPlacementSection 
          departmentName="Computer Science & Engineering"
          placementData={placementData}
        />

      </div>
 
      {/* Footer */}
      <ContactFooter />
    </div>
  );
}


