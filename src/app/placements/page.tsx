"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ArrowLeft, 
  TrendingUp, 
  Building2, 
  Users, 
  Award, 
  Calendar,
  FileText,
  Star,
  CheckCircle,
  Download,
  ExternalLink,
  BookOpen,
  Briefcase,
  Target,
  GraduationCap,
  Handshake,
  Lightbulb,
  Globe,
  UserCheck,
  BarChart3,
  MessageSquare,
  Users2,
  Briefcase as BriefcaseIcon,
  Mic,
  Brain
} from "lucide-react";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";
import { AnimatedStatCard } from "@/components/ui/animated-stat-card";
import { LogoLoop } from "@/components/ui/logo-loop";

interface PlacementStat {
  label: string;
  value: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: string;
}

interface Company {
  name: string;
  logo: string;
  studentsPlaced: number;
  avgPackage: string;
}

interface PlacementYear {
  year: string;
  totalStudents: number;
  placedStudents: number;
  placementRate: number;
  avgPackage: string;
  highestPackage: string;
  topCompanies: string[];
}

interface Notification {
  id: string;
  title: string;
  date: string;
  type: "notification" | "review" | "result";
  description: string;
  link?: string;
}

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  className = ""
}: { 
  value: number; 
  duration?: number; 
  suffix?: string; 
  prefix?: string;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * value);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function PlacementsPage() {
  const [activeSection, setActiveSection] = useState("objectives");

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ["objectives", "notifications", "reviews", "2019-21", "2021-22", "2022-23", "2023-24", "2024-25"].includes(hash)) {
        setActiveSection(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const placementStats: PlacementStat[] = [
    {
      label: "Overall Placement Rate",
      value: "94%",
      description: "Students placed in 2024",
      icon: TrendingUp,
      trend: "+8% from last year"
    },
    {
      label: "Average Package",
      value: "₹8.5 LPA",
      description: "Across all branches",
      icon: Award,
      trend: "+12% increase"
    },
    {
      label: "Highest Package",
      value: "₹45 LPA",
      description: "Offered by top MNC",
      icon: TrendingUp,
      trend: "New record"
    },
    {
      label: "Recruiting Partners",
      value: "150+",
      description: "Active companies",
      icon: Building2,
      trend: "25 new partners"
    }
  ];

  const topCompanies: Company[] = [
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com", studentsPlaced: 45, avgPackage: "₹6.5 LPA" },
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com", studentsPlaced: 38, avgPackage: "₹7.2 LPA" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com", studentsPlaced: 32, avgPackage: "₹6.8 LPA" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com", studentsPlaced: 28, avgPackage: "₹7.5 LPA" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", studentsPlaced: 15, avgPackage: "₹18.5 LPA" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", studentsPlaced: 12, avgPackage: "₹22.3 LPA" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com", studentsPlaced: 8, avgPackage: "₹28.7 LPA" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com", studentsPlaced: 25, avgPackage: "₹8.2 LPA" }
  ];

  const placementYears: PlacementYear[] = [
    {
      year: "2024-25",
      totalStudents: 450,
      placedStudents: 423,
      placementRate: 94,
      avgPackage: "₹8.5 LPA",
      highestPackage: "₹45 LPA",
      topCompanies: ["Amazon", "Microsoft", "Google", "TCS", "Infosys"]
    },
    {
      year: "2023-24",
      totalStudents: 420,
      placedStudents: 378,
      placementRate: 90,
      avgPackage: "₹7.8 LPA",
      highestPackage: "₹38 LPA",
      topCompanies: ["Microsoft", "Amazon", "TCS", "Infosys", "Wipro"]
    },
    {
      year: "2022-23",
      totalStudents: 400,
      placedStudents: 340,
      placementRate: 85,
      avgPackage: "₹7.2 LPA",
      highestPackage: "₹32 LPA",
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture"]
    },
    {
      year: "2021-22",
      totalStudents: 380,
      placedStudents: 304,
      placementRate: 80,
      avgPackage: "₹6.8 LPA",
      highestPackage: "₹28 LPA",
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"]
    },
    {
      year: "2019-21",
      totalStudents: 350,
      placedStudents: 280,
      placementRate: 80,
      avgPackage: "₹6.2 LPA",
      highestPackage: "₹25 LPA",
      topCompanies: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra"]
    }
  ];

  const notifications: Notification[] = [
    {
      id: "1",
      title: "Placement Drive - Amazon (2024-25)",
      date: "2024-12-15",
      type: "notification",
      description: "Amazon is conducting campus placement drive for Software Development Engineer roles",
      link: "#"
    },
    {
      id: "2",
      title: "Microsoft Placement Results",
      date: "2024-12-10",
      type: "result",
      description: "12 students selected for Microsoft with packages ranging from ₹18-28 LPA",
      link: "#"
    },
    {
      id: "3",
      title: "Google Interview Experience - Alumni Review",
      date: "2024-12-05",
      type: "review",
      description: "Read about the Google interview process and preparation tips from our alumni",
      link: "#"
    },
    {
      id: "4",
      title: "TCS Placement Drive Schedule",
      date: "2024-11-28",
      type: "notification",
      description: "TCS campus drive scheduled for December 20th, 2024",
      link: "#"
    }
  ];

  // Helper function to extract numeric values from package strings
  const extractPackageValue = (packageStr: string): number => {
    const match = packageStr.match(/₹(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Sample student data for each year
  const studentData = {
    "2019-21": [
      { sno: 1, rollNo: "19CSE001", name: "Rajesh Kumar", company: "TCS", package: "₹4.5 LPA" },
      { sno: 2, rollNo: "19CSE002", name: "Priya Sharma", company: "Infosys", package: "₹5.2 LPA" },
      { sno: 3, rollNo: "19CSE003", name: "Amit Singh", company: "Wipro", package: "₹4.8 LPA" },
      { sno: 4, rollNo: "19CSE004", name: "Sneha Patel", company: "Cognizant", package: "₹5.5 LPA" },
      { sno: 5, rollNo: "19CSE005", name: "Vikram Reddy", company: "Tech Mahindra", package: "₹4.2 LPA" },
      { sno: 6, rollNo: "19CSE006", name: "Anjali Gupta", company: "Accenture", package: "₹5.8 LPA" },
      { sno: 7, rollNo: "19CSE007", name: "Rohit Verma", company: "HCL", package: "₹4.9 LPA" },
      { sno: 8, rollNo: "19CSE008", name: "Kavya Nair", company: "Capgemini", package: "₹5.1 LPA" },
      { sno: 9, rollNo: "19CSE009", name: "Arjun Mehta", company: "IBM", package: "₹6.2 LPA" },
      { sno: 10, rollNo: "19CSE010", name: "Divya Joshi", company: "Microsoft", package: "₹8.5 LPA" }
    ],
    "2021-22": [
      { sno: 1, rollNo: "21CSE001", name: "Rahul Agarwal", company: "Amazon", package: "₹12.5 LPA" },
      { sno: 2, rollNo: "21CSE002", name: "Shreya Iyer", company: "Google", package: "₹15.2 LPA" },
      { sno: 3, rollNo: "21CSE003", name: "Karthik Rao", company: "TCS", package: "₹5.8 LPA" },
      { sno: 4, rollNo: "21CSE004", name: "Meera Desai", company: "Infosys", package: "₹6.2 LPA" },
      { sno: 5, rollNo: "21CSE005", name: "Suresh Kumar", company: "Wipro", package: "₹5.5 LPA" },
      { sno: 6, rollNo: "21CSE006", name: "Pooja Shah", company: "Cognizant", package: "₹6.8 LPA" },
      { sno: 7, rollNo: "21CSE007", name: "Nikhil Patel", company: "Accenture", package: "₹7.2 LPA" },
      { sno: 8, rollNo: "21CSE008", name: "Riya Singh", company: "HCL", package: "₹6.5 LPA" },
      { sno: 9, rollNo: "21CSE009", name: "Aditya Jain", company: "Capgemini", package: "₹6.9 LPA" },
      { sno: 10, rollNo: "21CSE010", name: "Neha Reddy", company: "IBM", package: "₹7.8 LPA" }
    ],
    "2022-23": [
      { sno: 1, rollNo: "22CSE001", name: "Vikash Kumar", company: "Microsoft", package: "₹18.5 LPA" },
      { sno: 2, rollNo: "22CSE002", name: "Ananya Singh", company: "Amazon", package: "₹16.2 LPA" },
      { sno: 3, rollNo: "22CSE003", name: "Ravi Sharma", company: "Google", package: "₹20.8 LPA" },
      { sno: 4, rollNo: "22CSE004", name: "Deepika Agarwal", company: "TCS", package: "₹6.5 LPA" },
      { sno: 5, rollNo: "22CSE005", name: "Manish Gupta", company: "Infosys", package: "₹7.2 LPA" },
      { sno: 6, rollNo: "22CSE006", name: "Sakshi Patel", company: "Wipro", package: "₹6.8 LPA" },
      { sno: 7, rollNo: "22CSE007", name: "Abhishek Verma", company: "Cognizant", package: "₹7.5 LPA" },
      { sno: 8, rollNo: "22CSE008", name: "Kritika Nair", company: "Accenture", package: "₹8.2 LPA" },
      { sno: 9, rollNo: "22CSE009", name: "Siddharth Mehta", company: "HCL", package: "₹7.9 LPA" },
      { sno: 10, rollNo: "22CSE010", name: "Ishita Joshi", company: "Capgemini", package: "₹8.5 LPA" }
    ],
    "2023-24": [
      { sno: 1, rollNo: "23CSE001", name: "Arjun Kumar", company: "Google", package: "₹25.5 LPA" },
      { sno: 2, rollNo: "23CSE002", name: "Priyanka Singh", company: "Microsoft", package: "₹22.2 LPA" },
      { sno: 3, rollNo: "23CSE003", name: "Rohit Agarwal", company: "Amazon", package: "₹24.8 LPA" },
      { sno: 4, rollNo: "23CSE004", name: "Shruti Sharma", company: "Apple", package: "₹28.5 LPA" },
      { sno: 5, rollNo: "23CSE005", name: "Kunal Patel", company: "TCS", package: "₹7.8 LPA" },
      { sno: 6, rollNo: "23CSE006", name: "Ritika Gupta", company: "Infosys", package: "₹8.2 LPA" },
      { sno: 7, rollNo: "23CSE007", name: "Vishal Reddy", company: "Wipro", package: "₹7.9 LPA" },
      { sno: 8, rollNo: "23CSE008", name: "Anushka Nair", company: "Cognizant", package: "₹8.5 LPA" },
      { sno: 9, rollNo: "23CSE009", name: "Rohan Mehta", company: "Accenture", package: "₹9.2 LPA" },
      { sno: 10, rollNo: "23CSE010", name: "Tanvi Joshi", company: "HCL", package: "₹8.8 LPA" }
    ],
    "2024-25": [
      { sno: 1, rollNo: "24CSE001", name: "Aryan Kumar", company: "Google", package: "₹32.5 LPA" },
      { sno: 2, rollNo: "24CSE002", name: "Ishita Singh", company: "Microsoft", package: "₹28.2 LPA" },
      { sno: 3, rollNo: "24CSE003", name: "Rohan Agarwal", company: "Amazon", package: "₹30.8 LPA" },
      { sno: 4, rollNo: "24CSE004", name: "Kavya Sharma", company: "Apple", package: "₹35.5 LPA" },
      { sno: 5, rollNo: "24CSE005", name: "Aditya Patel", company: "Meta", package: "₹38.2 LPA" },
      { sno: 6, rollNo: "24CSE006", name: "Sneha Gupta", company: "Netflix", package: "₹42.8 LPA" },
      { sno: 7, rollNo: "24CSE007", name: "Vikram Reddy", company: "TCS", package: "₹9.5 LPA" },
      { sno: 8, rollNo: "24CSE008", name: "Pooja Nair", company: "Infosys", package: "₹10.2 LPA" },
      { sno: 9, rollNo: "24CSE009", name: "Nikhil Mehta", company: "Wipro", package: "₹9.8 LPA" },
      { sno: 10, rollNo: "24CSE010", name: "Riya Joshi", company: "Cognizant", package: "₹10.5 LPA" }
    ]
  };

  const sidebarItems = [
    { id: "objectives", name: "Objectives of Training & Placement", icon: BookOpen },
    { id: "notifications", name: "Placement Notifications", icon: FileText },
    { id: "reviews", name: "Placement Reviews", icon: Star },
    { id: "2019-21", name: "Selected Students 2019-21", icon: Users },
    { id: "2021-22", name: "Students Selected in 2021-22", icon: Users },
    { id: "2022-23", name: "Selected Students 2022-23", icon: Users },
    { id: "2023-24", name: "Students Selected in 2023-24", icon: Users },
    { id: "2024-25", name: "Students Selected in 2024-25", icon: Users }
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
            Placement Cell
          </h1>
          <p className="text-xl text-primary font-semibold mb-6">
            Empowering Futures Through Strategic Placements
          </p>
        </motion.div>

        {/* Placement Statistics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {placementStats.map((stat, index) => (
            <AnimatedStatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              trend={stat.trend}
            />
          ))}
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
                <Briefcase className="w-4 h-4 text-white" />
                <h3 className="text-base font-semibold tracking-wide">Placement Cell</h3>
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

            {/* Objectives of Training & Placement */}
            {activeSection === "objectives" && (
              <div className="space-y-8">
                {/* Main Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-primary font-semibold">Training & Placement Cell</span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    OBJECTIVES OF TRAINING & PLACEMENT
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Objectives Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-br from-background to-primary/5">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Lightbulb className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Experiential Learning Focus</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Marri Laxman Reddy Institute of Technology & Management places special emphasis on experiential learning in the training process. Towards that end and to make MLRITM the favorite destination for all multinational companies the College has adopted a pedagogical practice that provides for enhanced learning opportunities through co-operation with industry, business, counterpart institutions and international experience.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">State-of-the-Art Training Facilities</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              As part of this the college has established a state of the art in in house training facility for honing the skills of the students. Apart from a large number of students gaining admission into prestigious institutions overseas for higher studies, a substantial number of them earn entry into renowned organizations on the completion of the course, every year.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                            <Globe className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-foreground mb-3">Global Brand Building</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              The college also strives to build a brand value in the corporate sectors around the world. In order to attain this aspect, The Training & placement Cell is committed to provide all possible assistance to its students in their efforts to find employment. The Training & Placement service operates year round to facilitate contacts between companies and graduates. Staffs are available to respond to student's question and concern of all kinds. The aim is to ensure that students have the information and skills necessary for an effective job search.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Counseling Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-background to-green-500/5">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                          <MessageSquare className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">Counseling, Motivation based Training and Placement Services at MLRITM</h4>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Marri Laxman Reddy Institute of Technology & Management has been striving to give its students the most flavored environment to enhance their growth and help achieve their goals.</span>
                        </p>
                        
                        <p className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>The in house student Counseling, Motivation, Training & Placement Program through our Help Desk and Finishing School is a step initiated by the MLRITM Management towards achieving their objectives.</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Functions Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 bg-gradient-to-br from-background to-purple-500/5">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                          <BriefcaseIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground">Functions of the T&P Cell</h4>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                            <Handshake className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Interaction between industry and institute</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-green-500/5 hover:bg-green-500/10 transition-colors">
                            <BookOpen className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Campus Recruitment Training to students</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                            <UserCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Arranging Campus Interviews to students</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
                            <Mic className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Guest lecturers by eminent industry experts</span>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-500/5 hover:bg-purple-500/10 transition-colors">
                            <BarChart3 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Faculty training in the industry</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-red-500/5 hover:bg-red-500/10 transition-colors">
                            <Brain className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Entrepreneurship Development Programme</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-teal-500/5 hover:bg-teal-500/10 transition-colors">
                            <Users2 className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Counseling and Personality Development</span>
                          </div>
                          <div className="flex items-start gap-4 p-4 rounded-lg bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors">
                            <MessageSquare className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                            <span className="text-foreground font-medium">Conducting Mock Interviews and Group Discussions</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-primary" />
                        <h4 className="text-2xl font-bold text-foreground">Ready to Start Your Career Journey?</h4>
                      </div>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join thousands of successful MLRITM alumni who have built their careers with our comprehensive training and placement support.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="group">
                          <Briefcase className="w-5 h-5 mr-2" />
                          Explore Placements
                        </Button>
                        <Button variant="outline" size="lg">
                          <Download className="w-5 h-5 mr-2" />
                          Download Brochure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            )}

            {/* Placement Notifications */}
            {activeSection === "notifications" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Placement Notifications</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                <div className="space-y-4">
                  {notifications.filter(n => n.type === "notification").map((notification) => (
                    <Card key={notification.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{notification.title}</h4>
                            <p className="text-muted-foreground mb-3">{notification.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{notification.date}</span>
                              </div>
                              <Badge variant="outline">Notification</Badge>
                            </div>
                          </div>
                          {notification.link && (
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Placement Reviews */}
            {activeSection === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Placement Reviews</h3>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                </div>
                <div className="space-y-4">
                  {notifications.filter(n => n.type === "review").map((review) => (
                    <Card key={review.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{review.title}</h4>
                            <p className="text-muted-foreground mb-3">{review.description}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{review.date}</span>
                              </div>
                              <Badge variant="outline">Review</Badge>
                            </div>
                          </div>
                          {review.link && (
                            <Button variant="ghost" size="sm">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Year-wise Selected Students Sections */}
            {placementYears.map((yearData) => (
              activeSection === yearData.year && (
                <div key={yearData.year} className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Students Selected in {yearData.year}</h3>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                  
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-semibold">{yearData.year} Placement Statistics</h4>
                        <Badge variant="secondary" className="text-sm">
                          <AnimatedCounter 
                            value={yearData.placementRate} 
                            duration={2.5}
                            suffix="%" 
                            className="font-semibold"
                          />
                          <span className="ml-1">Placement Rate</span>
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">
                            <AnimatedCounter 
                              value={yearData.totalStudents} 
                              duration={2}
                              className="text-primary"
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">Total Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            <AnimatedCounter 
                              value={yearData.placedStudents} 
                              duration={2.2}
                              className="text-green-600"
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">Placed Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">
                            <AnimatedCounter 
                              value={extractPackageValue(yearData.avgPackage)} 
                              duration={2.4}
                              prefix="₹"
                              suffix=" LPA"
                              className="text-blue-600"
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">Average Package</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            <AnimatedCounter 
                              value={extractPackageValue(yearData.highestPackage)} 
                              duration={2.6}
                              prefix="₹"
                              suffix=" LPA"
                              className="text-purple-600"
                            />
                          </div>
                          <div className="text-sm text-muted-foreground">Highest Package</div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Top Recruiting Companies:</p>
                        <div className="flex flex-wrap gap-2">
                          {yearData.topCompanies.map((company, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Selected Students Table */}
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-foreground">Selected Students</h4>
                        <Badge variant="secondary" className="text-sm">
                          {studentData[yearData.year as keyof typeof studentData]?.length || 0} Students
                        </Badge>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-16">S.No</TableHead>
                              <TableHead className="w-24">Roll No</TableHead>
                              <TableHead className="min-w-32">Name</TableHead>
                              <TableHead className="min-w-24">Company</TableHead>
                              <TableHead className="w-24 text-right">Package</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {studentData[yearData.year as keyof typeof studentData]?.map((student) => (
                              <TableRow key={student.sno} className="hover:bg-muted/50">
                                <TableCell className="font-medium">{student.sno}</TableCell>
                                <TableCell className="text-muted-foreground">{student.rollNo}</TableCell>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell>
                                  <Badge variant="outline" className="text-xs">
                                    {student.company}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right font-semibold text-primary">
                                  {student.package}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            ))}

          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}
