"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export interface DepartmentMenuItem {
  id: string;
  name: string;
  href: string;
}

export const DEFAULT_DEPARTMENT_MENU: DepartmentMenuItem[] = [
  { id: "dept-home", name: "Department Home", href: "#" },
  { id: "success", name: "Follow the Path to Success", href: "#" },
  { id: "vision-mission", name: "Vision & Mission", href: "#" },
  { id: "history", name: "History of the Department", href: "#" },
  { id: "nba", name: "NBA Accreditation", href: "#" },
  { id: "dab", name: "Departmental Advisory Board", href: "#" },
  { id: "committees", name: "Departmental Committees", href: "#" },
  { id: "faculty", name: "Faculty Profiles", href: "#" },
  { id: "labs", name: "Laboratories", href: "#" },
  { id: "events", name: "Departmental Events", href: "#" },
  { id: "contact-hod", name: "Contact HOD", href: "#" },
];

export default function DepartmentSidebar({
  title,
  items,
}: {
  title: string;
  items: DepartmentMenuItem[];
}) {
  return (
    <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="bg-[#127fa5] text-white px-4 py-2 flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-white" />
        <h3 className="text-base font-semibold tracking-wide">{title}</h3>
      </div>
      <ul className="p-4 space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            className="group flex items-center gap-2 text-foreground/80 rounded-md px-2 py-1 border border-transparent hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.06 }}
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-sm flex-shrink-0 group-hover:scale-110 transition-transform"></span>
            <Link href={item.href} className="text-sm px-1 py-0.5 rounded group-hover:text-primary group-hover:underline underline-offset-2 transition-colors">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}


