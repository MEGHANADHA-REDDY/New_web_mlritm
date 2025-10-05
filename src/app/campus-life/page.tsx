"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ContactFooter from "@/components/ContactFooter";

type SectionKey =
  | "activities"
  | "facilities"
  | "antiragging"
  | "nss"
  | "alumni"
  | "campus-radio"
  | "gallery"
  | "rti"
  | "iic"
  | "ral";

const sectionOrder: SectionKey[] = [
  "activities",
  "facilities",
  "antiragging",
  "nss",
  "alumni",
  "campus-radio",
  "gallery",
  "rti",
  "iic",
  "ral",
];

// Section content renderers (no tables)
function SectionContent({ section }: { section: SectionKey }) {
  if (section === "activities") {
    return (
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          The Institute helps the B.Tech, MBA and B-Pharmacy Students to imbibe Culture, Knowledge and
          Sportsman Spirit during their Study Period.
        </p>
        <p>
          The Institute also organises events like Traditional Day, Annual Day, Fashion Shows, Rockshows,
          Staff Picnic and other Cultural Events like Danz Pavimento a State Level Dance Competition and a
          Musical Nite’s with International Repute celebrities during Annual Day Celebrations.
        </p>
        <p>
          MLRITM has been conducting Traditional Day every year. The purpose of Celebrating traditional day is
          basically to imbibe a spirit of Oneness, where the First year Students who have joined the Institute
          shed their Inhibitions, play and dine together with their seniors and recollect the old traditions &
          glory of the Past. Apart from that the traditional day is being celebrated with a purpose of removing
          fear and as a measure of Anti-Ragging activity.
        </p>
      </div>
    );
  }

  if (section === "antiragging") {
    const points = [
      "Ragging in any form inside or outside the college is banned.",
      "Anti-Ragging Committee constituted with faculty and staff members.",
      "Precautions as per AICTE / UGC Norms to prevent ragging and ensure 100% no-ragging.",
      "Duties allotted across campus areas and hostels to avoid ragging activities.",
    ];
    const coverage = [
      "Departmental Buildings",
      "Canteen",
      "Library",
      "Parking places",
      "Play grounds",
      "Hostels",
    ];
    return (
      <div className="space-y-6">
        <p className="text-muted-foreground">
          Ragging in any form inside or outside the college is banned and in order to have the peaceful
          atmosphere in and around the College, Canteen, Library and Hostels, an Anti-Ragging Committee with
          the faculty and staff members are constituted.
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <div>
          <h3 className="font-semibold mb-2">Monitoring Coverage</h3>
          <div className="flex flex-wrap gap-2">
            {coverage.map((c) => (
              <span key={c} className="px-3 py-1 rounded-full bg-accent text-foreground text-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section === "facilities") {
    const rows = [
      ["Library", "Hostel"],
      ["Transport", "Sports"],
      ["Gym", "Media Gallery"],
      ["Cafeteia", "Computer Center"],
    ];
    return (
      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">List of facilities provided</h3>
        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Facilities</TableHead>
                <TableHead className="w-1/2">&nbsp;</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map(([a, b], idx) => (
                <TableRow key={idx} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{a}</TableCell>
                  <TableCell className="font-medium">{b}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  if (section === "nss") {
    const responsibilities = [
      "Develop a sense of social and civic responsibility.",
      "Develop capacity to meet emergencies and natural disasters.",
      "Identify community needs and involve students in problem solving.",
      "Motivate students to understand the values and philosophy of NSS.",
      "Plan, implement and evaluate NSS activities effectively.",
      "Coordinate internal and external resources for programme success.",
    ];
    const members = [
      { name: "Dr. R. Murali Prasad", designation: "Principal", dept: "ECE", responsibility: "Chairperson" },
      { name: "Mr. G. Vijaya Simha Goud", designation: "Assistant Professor", dept: "H & S", responsibility: "Program Officer" },
      { name: "Mr. Y. Appa Rao", designation: "Dean – Students Affairs", dept: "CSE", responsibility: "Member" },
      { name: "Dr. V. Vara Lakshmi", designation: "Dean- External Projects - Schemes", dept: "Civil", responsibility: "Member" },
      { name: "Mrs. A. Mounika", designation: "Assistant Professor", dept: "CSE", responsibility: "Member" },
      { name: "Mrs. Ch. Tejaswi", designation: "Assistant Professor", dept: "CSM", responsibility: "Member" },
      { name: "Mr. A. Anil", designation: "Assistant Professor", dept: "ECE", responsibility: "Member" },
      { name: "Mr. B. Punnam Chand", designation: "Assistant Professor", dept: "EEE", responsibility: "Member" },
      { name: "Mr. N. Raja Sekhar", designation: "Assistant Professor", dept: "MBA", responsibility: "Member" },
      { name: "Ms. J. Seetunya", designation: "Assistant Professor", dept: "Civil", responsibility: "Member" },
    ];
    return (
      <div className="space-y-6 text-muted-foreground">
        <p>
          National Service Scheme (NSS) is a widely recognized and influential youth-centric program in colleges
          across the country. NSS was established in 1969 with the primary goal of fostering the character and
          personality of student youth via volunteer community service. NSS was commissioned by MLRITM in 2016.
        </p>
        <p>
          The activities of the MLRITM NSS mainly focus on Community Development Services, Social Services,
          Environmental Awareness Programs, Health Awareness Programs and Technology Transfer Programs. The NSS
          at MLRITM conducts various Regular and Special Camping activities.
        </p>
        <div>
          <h3 className="font-semibold mb-2">Functions and Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2">
            {responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Frequency of Meeting</h3>
          <p>Minimum 2 times in a Semester or as needed</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Members of NSS Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {members.map((m) => (
              <div key={m.name} className="rounded-lg border p-3">
                <div className="font-medium text-foreground">{m.name}</div>
                <div className="text-sm">{m.designation} — {m.dept}</div>
                <div className="text-sm font-semibold">{m.responsibility}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section === "alumni") {
    return (
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          Alumni are graduates of a university, college or school. Alumni associations organize social events,
          publish newsletters, raise funds, and help alumni maintain connections to their institution and
          fellow graduates, supporting networking and community.
        </p>
        <p>
          An Alumni association was formed in the College during Academic year 2013-14 consisting of Alumni of
          both Engineering and M.B.A Students. The Association serves the requirements of Alumni, attends to
          their needs, and strengthens ties between alumni and Alma Mater.
        </p>
        <p>
          Additionally, an Alumni committee conducts meetings once in every three months to discuss various
          issues related to Alumni.
        </p>
      </div>
    );
  }

  if (section === "campus-radio") {
    return (
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          With the help of Younify, we launched our own campus radio: "MLRITM Radio". Students collaborate in
          teams such as RJ, Graphic Designing, Technical, Creativity, Scheduling, Audio Editing, E-Publicity
          and Drafting to produce engaging content.
        </p>
        <p>
          The radio keeps everyone updated about placements, events, schedules, tournaments, achievements, and
          more. We also record sessions featuring interactions with faculty and students.
        </p>
        <div className="space-y-2">
          <div>Follow on Instagram and Facebook: @younify_mlritm</div>
          <div>
            To tune in: Download Younify Radio app from Google Play, open the app, tap
            "Tune into student radio" and search for Marri Laxman Reddy Institute of Technology and Management.
          </div>
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.atiivanns.younify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Get the Younify app
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (section === "rti") {
    const functions = [
      "Promote transparency and accountability in administration.",
      "Provide information about institution, faculty, and students to stakeholders.",
      "Provide shareable information via the Right to Information Cell at the College.",
    ];
    const members = [
      { name: "Dr. R. Murali Prasad", designation: "Principal", dept: "ECE", responsibility: "Chairperson" },
      { name: "Dr. K. Venkateswara Reddy", designation: "Associate Professor", dept: "Mech", responsibility: "Convener" },
      { name: "Dr. K. Niranjan", designation: "Professor", dept: "MBA", responsibility: "Member" },
      { name: "Dr. K.  Suresh Babu", designation: "Professor", dept: "H&S", responsibility: "Member" },
      { name: "Mr. D. Pavan Kumar", designation: "Admin", dept: "Admin", responsibility: "Member" },
    ];
    return (
      <div className="space-y-6 text-muted-foreground">
        <p>
          All stakeholders may seek information regarding institutional administrative and academic activities
          from the competent authority of the Right to Information Cell by submitting an application with
          personal details and particulars of information sought.
        </p>
        <div>
          <h3 className="font-semibold mb-2">Functions and Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2">
            {functions.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Frequency of Meeting</h3>
          <p>Minimum 2 times in a Semester or as needed</p>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Members of RTI Committee</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {members.map((m) => (
              <div key={m.name} className="rounded-lg border p-3">
                <div className="font-medium text-foreground">{m.name}</div>
                <div className="text-sm">{m.designation} — {m.dept}</div>
                <div className="text-sm font-semibold">{m.responsibility}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (section === "iic") {
    return (
      <div className="space-y-4 text-muted-foreground">
        <p>Visit our Institution’s Innovation Council (IIC) portal for activities and updates.</p>
        <a
          href="https://iic.mlritm.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white"
        >
          Open IIC Website
        </a>
      </div>
    );
  }

  if (section === "ral") {
    return (
      <div className="space-y-4 text-muted-foreground">
        <p>
          Explore RAL — our hub for innovation, projects, and events in robotics and advanced labs.
        </p>
        <a
          href="https://vamshisriramoju94.wixsite.com/ral-vision"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white"
        >
          Visit RAL Website
        </a>
      </div>
    );
  }

  // facilities, gallery placeholders
  return (
    <div className="text-muted-foreground">Content will be updated soon.</div>
  );
}

export default function CampusLifePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("activities");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash.substring(1) as SectionKey) || "activities";
      if (sectionOrder.includes(hash)) setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Campus Life
          </h1>
          <p className="text-xl text-primary font-semibold mb-6">
            Explore activities, facilities, clubs and more
          </p>
        </motion.div>

        {/* Main Content with Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6">
          {/* Sidebar */}
          <Card>
            <CardContent className="p-3">
              <div className="flex flex-col gap-1">
                {sectionOrder.map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      window.location.hash = key;
                    }}
                    className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === key 
                        ? "bg-primary text-white" 
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {key.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Section Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{activeSection.toUpperCase()}</Badge>
                  <h2 className="text-2xl font-semibold">
                    {activeSection.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                  </h2>
                </div>
              </div>

              <Card className="mb-16">
                <CardContent className="p-6">
                  <SectionContent section={activeSection} />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


