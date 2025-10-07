"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Building, Globe, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import DepartmentSidebar from "@/components/DepartmentSidebar";
import { useState } from "react";

export default function CivilEngineeringPage() {
  const [activeTab, setActiveTab] = useState("home");
  const departmentData = {
    id: "civil",
    name: "Civil Engineering Department",
    image: "/images/departments/civil.jpg",
    tagline: "Civil Engineers: Creating Tomorrow Today",
    description: "Civil Engineering is a broad field of engineering that deals with the planning, construction, and maintenance of structures, or public works, as they are related to earth, water, or civilization and their processes. Civil Engineering today deals with power plants, bridges, roads, railways, structures, water supply, irrigation, the natural environment, sewer, flood control, transportation, and traffic. Civil Engineering may be regarded as the profession that makes the world a more agreeable place to live in.",
    quote: {
      text: "The direction in which education starts a man will determine his future life",
      author: "Plato"
    },
    history: "The department of civil engineering was established in the academic year 2009-2010 with an intake of 60 students. This Department is offering one M.Tech programme, named Structural Engineering with the intake of 24 students. The department has well qualified and experienced faculty.",
    programs: [
      "B.Tech in Civil Engineering (Intake: 60 students)",
      "M.Tech in Structural Engineering (Intake: 24 students)"
    ],
    highlights: [
      "Well qualified and experienced faculty members",
      "Faculty doing consultancy work in concrete, survey, structural, environmental and soil",
      "Expert lectures from reputed institutions like JNTUH, APSRAC, Osmania University",
      "Technical excellence and modern infrastructure facilities",
      "Latest version of software and highly sophisticated instruments",
      "Focus on power plants, bridges, roads, railways, and infrastructure",
      "Water supply, irrigation, and environmental engineering",
      "Transportation and traffic engineering expertise"
    ],
    faculty: 15,
    students: 84,
    vision: "The Civil Engineering department strives to impart quality education by extracting the innovative skills of students and to face the challenges in latest technological advancements and to serve the society.",
    mission: [
      "Provide quality education and to motivate students towards professionalism",
      "Address the advanced technologies in research and industrial issues"
    ],
    achievements: [
      "Established in 2009-2010 with strong foundation",
      "B.Tech program with 60 student intake capacity",
      "M.Tech Structural Engineering program with 24 student intake",
      "Expert lectures from JNTUH, APSRAC, Osmania University",
      "Consultancy services to farmers and industries",
      "Modern infrastructure with latest software and instruments",
      "Focus on societal service through engineering solutions"
    ]
  };

  const sidebarItems = [
    { id: "home", name: "Department Home" },
    { id: "success", name: "Follow the Path to Success in Civil Engineering" },
    { id: "vision-mission", name: "Vision & Mission" },
    { id: "history", name: "History of the Department" },
    { id: "dab", name: "Departmental Advisory Board" },
    { id: "paqic", name: "Program Assessment and Quality Improvement Committee" },
    { id: "course-expert", name: "Course Expert Team" },
    { id: "aip", name: "Academic Integrity Panel" },
    { id: "dept-committees", name: "Departmental Committees" },
    { id: "faculty-profiles", name: "Faculty Profiles" },
    { id: "jntuh-supervisors", name: "JNTUH Recognized Research Supervisors" },
    { id: "laboratories", name: "Laboratories" },
  ];

  const renderSection = () => {
    if (activeTab === "home") {
      return (
        <>
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Building className="w-6 h-6 text-primary" />
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
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-base">{program}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Key Highlights */}
          <div>
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
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-base leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </>
      );
    }

    if (activeTab === "success") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Follow the Path of Success in Civil Engineering</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">At MLRITM, students follow three key pathways to success: curriculum, career development, and skills and knowledge enhancement.The B.Tech program in Civil Engineering features an updated curriculum that integrates core engineering skills with high-impact educational practices and project-based learning, offering minor programs in emerging technologies to provide students with a well-rounded academic foundation and practical experience for a versatile professional profile.</p>
          </div>
        </div>
      );
    }

    if (activeTab === "vision-mission") {
      return (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-primary" />Department Vision</h3>
              <p className="text-muted-foreground leading-relaxed">The Civil Engineering department strives to impart quality education by extracting the innovative skills of students and to face the challenges in latest technological advancements and to serve the society.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Award className="w-5 h-5 text-primary" />Department Mission</h3>
              <p className="text-sm text-muted-foreground mb-3">To fulfill the promised vision through the following strategic characteristics and aspirations:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span><span className="text-sm leading-relaxed">Provide quality education and to motivate students towards professionalism</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span><span className="text-sm leading-relaxed">Address the advanced technologies in research and industrial issues</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "history") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Department History</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">The department of civil engineering was established in the academic year 2009-2010 with an intake of 60 students. This Department is offering one M.Tech programme, named Structural Engineering with the intake of 24 students. The department has well qualified and experienced faculty.</p>
          </div>
        </div>
      );
    }

    if (activeTab === "dab") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Departmental Advisory Board (DAB)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">The DAB is composed of members from eminent institutions as well as members from industry, alumni and members of faculty of the department.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">The composition of the DAB is as follows:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Name of the member</th>
                    <th className="py-2 pr-4">Designation</th>
                    <th className="py-2 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Dr.Murali Prasad</td>
                    <td className="py-2 pr-4">Principal</td>
                    <td className="py-2 pr-4">Chairman</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "paqic") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Program Assessment and Quality Improvement Committee (PAQIC)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">The departmental academic committee is responsible for smooth functioning and monitoring of all academic activities.</p>
            <h4 className="text-lg font-semibold text-foreground mb-2">Composition</h4>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2"></span><span>Head of the department - Convenor</span></li>
              <li className="flex items-start gap-2 text-muted-foreground"><span className="w-2 h-2 bg-primary rounded-full mt-2"></span><span>Three to Five senior faculty members in the department nominated by HOD - Members</span></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">Members to the PAQIC (UG and PG) will be opted covering each specialization of the department. In very small departments one or more faculty members of other departments may be opted by the HOD with approval of Dean of Academic. One or more external members may be opted by the Convenor, PAQIC on specific occasions such as making the syllabus for new courses, updating / modifying of present syllabus etc. The tenure of the departmental academic committee shall be two years. The composition of the DAC shall need approval of the Principal. The present composition of the PAQIC is as follows</p>
          </div>
        </div>
      );
    }

    if (activeTab === "course-expert") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Course Expert Team (CET)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">The course expert team is responsible in exercising the central domain of expertise in developing and renewing the curriculum and assessing its quality and effectiveness to the highest of professional standards.</p>
            <h4 className="text-lg font-semibold text-foreground mb-2">The functions of the Course Expert Team are to:</h4>
            <ul className="space-y-2 mb-4 text-muted-foreground">
              <li>Curriculum, including establishing prerequisites.</li>
              <li>Inform the Academic Committee the 'day-to-day' matters as are relevant to the offered courses.</li>
              <li>Consider student and staff feedback on the efficient and effective development of the relevant courses.</li>
              <li>Review the following: Course Descriptions (Prerequisites, Course Objectives, Course Outcomes, Course Outcomes mapping to Program Outcomes / Program Specific Outcomes, Articulation Matrix); Delivery of Modules; Module Outlines; Module Assessment Tasks; Development of Course Full Stack; Review Course Outcomes and Program Outcomes / Program Specific Outcomes Assessment reports.</li>
            </ul>
            <h4 className="text-lg font-semibold text-foreground mb-2">Course Groups and Faculty Expertise</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">S.No</th>
                    <th className="py-2 pr-4">Sourse Specialization</th>
                    <th className="py-2 pr-4">Course</th>
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Structural Engineering</td>
                    <td className="py-2 pr-4">Theory of Structures</td>
                    <td className="py-2 pr-4">Dr.Vara lakshmi</td>
                    <td className="py-2 pr-4">Convener</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "aip") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Departmental Academic Integrity Panel (DAIP)</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">Departmental Academic Integrity panel (DAIP) has been constituted with the following members.</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Name of the member</th>
                    <th className="py-2 pr-4">Designation</th>
                    <th className="py-2 pr-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Dr.Murali Prasad</td>
                    <td className="py-2 pr-4">Principal</td>
                    <td className="py-2 pr-4">Chairman</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Roles & Responsibilities</h4>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>Creating awareness about plagiarism and plagiarism detection software</li>
              <li>The allegation of plagiarism against the researcher, student, faculty, and staff</li>
              <li>The DAIP shall have the power to assess the level of plagiarism and recommend penalty(ies) accordingly.</li>
              <li>The DAIP after investigation shall submit its report with the recommendation on penalties to be imposed to the IAIP within a period of 30 days from the date of receipt of complaint / initiation of the proceedings</li>
            </ul>
          </div>
        </div>
      );
    }

    if (activeTab === "dept-committees") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Departmental Committees</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">The following committees are formed for attaining the best overall performance of the department in academic, co-curricular and extra-curricular activities:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Name of Committee</th>
                    <th className="py-2 pr-4">Name of Co-ordinator</th>
                    <th className="py-2 pr-4">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Department Academics</td>
                    <td className="py-2 pr-4">Dr.Vara Laxmi</td>
                    <td className="py-2 pr-4">Professor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "faculty-profiles") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Departmental Faculty List</h3>
            <p className="text-muted-foreground mb-4">MLRITM CIVIL DEPARTMENT FACULTY LIST</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Name of Faculty</th>
                    <th className="py-2 pr-4">Designation</th>
                    <th className="py-2 pr-4">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1,"Dr. VAJJA VARALAKSHMI","Professor And Dean"],
                    [2,"Dr. DHALADHULI SVSMRK CHEKRAVARTY","Associate Professor"],
                    [3,"Dr. MURALI KALLEMPUDI","Associate Professor & Head"],
                    [4,"Dr. A PARVATHI DEVI","Associate Professor"],
                    [5,"Dr. A.RAMA KANTH","Assistant Professor"],
                    [6,"Ms MANDAVA NANDITHA","Assistant Professor"],
                    [7,"Mr. Thambisetty Jayakrishna","Assistant Professor"],
                    [8,"Ms. SEETUNYA JOGI","Assistant Professor"],
                    [9,"Mr. CH. REVANSIDDAPPA","Assistant Professor"],
                    [10,"Mrs.T Neha","Assistant Professor"],
                    [11,"Ms. BUSARAJU LAVANYA","Assistant Professor"],
                    [12,"Mrs. Akkula Parimala","Assistant Professor"],
                    [13,"Mr.Suresh Patti","Assistant Professor"],
                    [14,"Mr. Ch. Chaitanya Kumar","Assistant Professor"],
                    [15,"Ms. Chaganti Shivani","Assistant Professor"],
                    [16,"Mr. KRISHNA RAO NARTU","Assistant Professor"],
                    [17,"Mr.T.PRASAD","Assistant Professor"],
                  ].map((row) => (
                    <tr key={row[0] as number} className="border-b">
                      <td className="py-2 pr-4">{row[0] as number}</td>
                      <td className="py-2 pr-4">{row[1] as string}</td>
                      <td className="py-2 pr-4">{row[2] as string}</td>
                      <td className="py-2 pr-4"><button className="text-primary hover:underline">View Profile</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "jntuh-supervisors") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Civil-JNTUH Recognized Research Supervisors</h3>
            <p className="text-muted-foreground mb-4">The following faculty are recognised as Research (PhD) Supervisors / Co-Supervisors / External Supervisors:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Name of Faculty</th>
                    <th className="py-2 pr-4">Research Area</th>
                    <th className="py-2 pr-4">University</th>
                    <th className="py-2 pr-4">PhD Guiding</th>
                    <th className="py-2 pr-4">PhD Produced</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b align-top">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Dr.M.SARAVANAN</td>
                    <td className="py-2 pr-4">Structural Optimization,Steel-Concrete composite structures,Bridge Engineering,Special Concrete,Fiber reinforced polymer and carbon Fiber reinforced polymer materials,Estimation ,Valuation and project management</td>
                    <td className="py-2 pr-4">Jawaharlal Nehru Technological University, Hyderabad</td>
                    <td className="py-2 pr-4">-</td>
                    <td className="py-2 pr-4">-</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="py-2 pr-4">2</td>
                    <td className="py-2 pr-4">Dr.R.Gopi</td>
                    <td className="py-2 pr-4">Light weight aggregate concrete,Self-compacting concrete,Special concrete,Pre stressed concrete,Self-curing concrete</td>
                    <td className="py-2 pr-4">Jawaharlal Nehru Technological University, Hyderabad</td>
                    <td className="py-2 pr-4">-</td>
                    <td className="py-2 pr-4">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "laboratories") {
      return (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">CIVIL ENGINEERING LABORATORY</h3>
            <p className="text-muted-foreground mb-4">CIVIL ENGINEERING LABORATORY</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 pr-4">Sr.No</th>
                    <th className="py-2 pr-4">Lab Name</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "Surveying Laboratory",
                    "Strength Of Materials Laboratory",
                    "Fluid Mechanics And Hydraulic Machinery Laboratory",
                    "Concrete Technology Laboratory",
                    "Engineering Geology Laboratory",
                    "Geotechnical Engineering Laboratory",
                    "Transpotation Engineering Laboratory",
                    "Environmental Engineering Laboratory",
                    "Computer Aided Design Laboratory",
                    "Basic Electrical And Electronics Engineering Laboratory",
                    "Data Structures Laboratory",
                    "Python Laboratory",
                    "Advanced English Language Communication Skills Laboratory",
                    "Center of Excellence",
                  ].map((lab, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2 pr-4">{idx + 1}</td>
                      <td className="py-2 pr-4">{lab}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

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

        {/* Main Content Grid with Department Sidebar */}
        <motion.div 
          className="grid lg:grid-cols-4 gap-12 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Left Sidebar */}
          <motion.div
            className="lg:col-span-1 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Custom Sidebar with stateful navigation */}
            <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
              <div className="bg-[#127fa5] text-white px-4 py-2">
                <h3 className="text-base font-semibold tracking-wide">Civil Engineering</h3>
              </div>
              <ul className="p-4 space-y-2">
                {sidebarItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className={`group flex items-center gap-2 text-foreground/80 rounded-md px-2 py-1 border border-transparent hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-colors cursor-pointer ${activeTab === item.id ? 'bg-primary/10 border-primary/30 text-primary' : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                    onClick={() => setActiveTab(item.id)}
                  >
                    <span className={`w-1.5 h-1.5 rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform ${activeTab === item.id ? 'bg-primary' : 'bg-primary'}`}></span>
                    <span className="text-sm px-1 py-0.5 rounded group-hover:text-primary underline-offset-2 transition-colors">
                      {item.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Main Content Area (Image + Content) */}
          <motion.div 
            className="lg:col-start-2 lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div id="home" className="relative w-full h-56 md:h-72 lg:h-80 xl:h-[420px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={departmentData.image}
                alt={departmentData.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Quick Facts Card */}
            <div className="bg-accent/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Quick Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{departmentData.faculty}</div>
                  <div className="text-sm text-muted-foreground">Faculty Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{departmentData.students}</div>
                  <div className="text-sm text-muted-foreground">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2009-10</div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">60</div>
                  <div className="text-sm text-muted-foreground">B.Tech Intake</div>
                </div>
              </div>
            </div>
            {/* Right Column - Content (dynamic below Quick Facts) */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {renderSection()}
            </motion.div>
          </motion.div>
        </motion.div>

        

      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
