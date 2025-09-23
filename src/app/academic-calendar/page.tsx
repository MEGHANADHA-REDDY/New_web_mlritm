"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactFooter from "@/components/ContactFooter";

export default function AcademicCalendarPage() {
  const btechCalendars: { date: string; label: string; href: string }[] = [
    { date: "30-05-2025", label: "2023 – B.TECH(MLRS-R22) – V & VI SEMESTERS_ACADEMIC CALENDAR 2025-26", href: "#" },
    { date: "30-05-2025", label: "2023 – B.TECH(MLRS-R22) – VII & VIII SEMESTERS_ACADEMIC CALENDAR 2025-26", href: "#" },
    { date: "04-07-2024", label: "B.Tech VII & VIII Semesters (MLRS-R20) ACADEMIC CALENDAR 2024-25", href: "#" },
    { date: "03-07-2024", label: "B.Tech V & VI Semesters (MLRS-R22) ACADEMIC CALENDAR 2024-25", href: "#" },
    { date: "03-07-2024", label: "B.Tech III & IV Semesters (MLRS-R22) ACADEMIC CALENDAR 2024-25", href: "#" },
    { date: "26-03-2024", label: "Revised 2022 BATCH – II B.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "26-03-2024", label: "Revised 2021 BATCH – III B.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "22-01-2024", label: "2021 BATCH – III B.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "26-08-2023", label: "2022 BATCH – II B.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "05-08-2023", label: "2021 BATCH – III B.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "12-06-2023", label: "2020 BATCH – IV B.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "05-06-2023", label: "REVISED 2022 BATCH – I B.TECH II SEM(MLRS R22) ACADEMIC CALENDAR – 2022-23", href: "#" },
    { date: "07-11-2022", label: "2022 BATCH I B.Tech I & II Semesters -MLRS R22 – 2022-23", href: "#" },
    { date: "23-09-2022", label: "2021 BATCH – II B.Tech I&II Semesters (MLRS-R20) ACADEMIC CALENDAR 2022-2023", href: "#" },
    { date: "05-07-2022", label: "2020 BATCH – III B.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2022-23", href: "#" },
  ];
  const mtechCalendars: { date: string; label: string; href: string }[] = [
    { date: "26-03-2024", label: "Revised 2023 BATCH – I M.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "20-10-2023", label: "2023 BATCH – I M.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "14-09-2023", label: "2022 BATCH – II M.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "05-06-2023", label: "2022 BATCH – I M.TECH II SEM(MLRS R22) – REVISED ACADEMIC CALENDAR – 2022-23", href: "#" },
    { date: "05-06-2023", label: "2021 BATCH – II M.TECH II SEM (MLRS R20) – REVISED ACADEMIC CALENDAR – 2022-23", href: "#" },
    { date: "20-12-2022", label: "2022 BATCH – I M.TECH I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2022-23", href: "#" },
    { date: "20-11-2022", label: "2021 BATCH – II M.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2022-23", href: "#" },
    { date: "26-04-2022", label: "2021 BATCH – I M.TECH I & II SEM(MLRS-R20) REVISED ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "07/03/2022", label: "2021 BATCH – I M.TECH I & II SEM(MLRS-R20) REVISED ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "06/12/2021", label: "2021 BATCH – I M.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "06/12/2021", label: "2020 BATCH – II M.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "", label: "2020 BATCH – II M.TECH I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "", label: "RE-REVISED I M.TECH & MBA II SEM (MLRS-R20) ACADEMIC CALENDAR 2020-21", href: "#" },
    { date: "", label: "JNTUH_Revised_Academic_Calendars_2020-21_for_UGPG_programs_II_year_onwards1", href: "#" },
    { date: "", label: "I M.TECH I & II SEM (MLRS-R20) ACADEMIC CALENDAR 2020-21", href: "#" },
    { date: "", label: "MLRITM Revised Academic Calender – M.Tech II Year I & II Semisters (MLRITM- R19)", href: "#" },
    { date: "", label: "MLRITM – R19 -Autonomous Calendar-2020 – 21 – M.Tech 2nd year (1st & 2nd semesters)", href: "#" },
    { date: "", label: "ACADEMIC CALENDER FOR 2019-2020", href: "#" },
    { date: "", label: "ACADEMIC CALENDER FOR 2018-2019", href: "#" },
    { date: "", label: "ACADEMIC CALENDER FOR 2017-2018", href: "#" },
    { date: "", label: "ACADEMIC CALENDER FOR 2016-2017", href: "#" },
    { date: "", label: "ACADEMIC CALENDER FOR 2015-2016", href: "#" },
  ];
  const mbaCalendars: { date: string; label: string; href: string }[] = [
    { date: "26-03-2024", label: "Revised 2023 BATCH – I MBA I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "26-03-2024", label: "Revised 2022 BATCH – II MBA I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "20-10-2023", label: "2023 BATCH – I MBA I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "14-09-2023", label: "2022 BATCH – II MBA I & II SEM(MLRS-R22) ACADEMIC CALENDAR 2023-24", href: "#" },
    { date: "05-06-2023", label: "2022 BATCH – I  MBA II SEM(MLRS R22) – REVISED ACADEMIC CALENDAR – 2022-23", href: "#" },
    { date: "05-06-2023", label: "2021 BATCH – II MBA II SEM(MLRS R20) – REVISED ACADEMIC CALENDAR – 2022-23", href: "#" },
    { date: "07-11-2022", label: "ACADEMIC CALENDAR A.Y.2022-23_Updated", href: "#" },
    { date: "28-10-2022", label: "2021 Batch – II MBA – I & II (MLRS – R20) ACADEMIC CALENDAR A.Y.2022-23", href: "#" },
    { date: "26-04-2022", label: "2021 BATCH – I MBA I & II SEM(MLRS-R20) REVISED ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "07/03/2022", label: "2021 BATCH – I MBA I & II SEM(MLRS-R20) REVISED ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "06/12/2021", label: "2021 BATCH – I MBA I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "06/12/2021", label: "2020 BATCH – II MBA I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "", label: "2020 BATCH – II MBA I & II SEM(MLRS-R20) ACADEMIC CALENDAR 2021-22", href: "#" },
    { date: "", label: "RE-REVISED I M.TECH & MBA II SEM (MLRS-R20) ACADEMIC CALENDAR 2020-21(05.08.21)", href: "#" },
    { date: "", label: "JNTUH_Revised_Academic_Calendars_2020-21_for_UGPG_programs_II_year_onwards1", href: "#" },
    { date: "", label: "I MBA I & II SEM (MLRS-R20) ACADEMIC CALENDAR 2020-21(30.12.2020)", href: "#" },
    { date: "", label: "REVISED II MBA I & II SEM (MLRITM-R19) ACADEMIC CALENDAR 2020-21(28.11.2020)", href: "#" },
    { date: "", label: "MLRITM Academic Calender – MBA II Year I & II Semisters (MLRITM- R19)", href: "#" },
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
          <h1 className="text-5xl font-extrabold text-foreground mb-2">Academic Calendars</h1>
        </motion.div>

        {/* Hero-like section: image left, text right */}
        <motion.div
          className="grid lg:grid-cols-2 gap-10 items-start mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/seminar-hall.jpg"
              alt="Academic Calendar"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              The Academic Calendar at MLRITM provides a comprehensive schedule of key
              academic events, deadlines, and activities for the entire academic year. It is
              designed to keep students, faculty, and staff informed about important dates
              such as the start and end of semesters, exam schedules, holidays, and
              registration periods. By offering a structured timeline, the calendar ensures
              that everyone stays organized and can plan effectively for each phase of the
              academic journey.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With an emphasis on smooth academic progression, the calendar at MLRITM is
              regularly updated to reflect any changes and includes detailed information
              about co-curricular and extra-curricular events, workshops, and seminars. This
              organized approach allows students to balance academic responsibilities with
              personal development opportunities, fostering a well-rounded educational
              experience.
            </p>
          </div>
        </motion.div>

        {/* Downloads */}
        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-primary" />
            Download Academic Calendars
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["UG 2024-25", "PG 2024-25", "UG 2023-24", "PG 2023-24", "UG 2022-23", "PG 2022-23"].map(
              (label, idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="group block border border-gray-300 rounded-md p-4 hover:shadow-md hover:border-primary transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium group-hover:text-primary">
                      {label}
                    </span>
                    <span className="text-sm text-muted-foreground">PDF</span>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>

        {/* B.TECH Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-3">B.TECH</h3>
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-foreground">
                  <th className="w-48 px-4 py-3 text-left font-semibold border border-gray-300">Updated on</th>
                  <th className="px-4 py-3 text-left font-semibold border border-gray-300">Academic Calendars</th>
                </tr>
              </thead>
              <tbody>
                {btechCalendars.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/40 transition-colors">
                    <td className="px-4 py-3 border border-gray-300 text-muted-foreground">{row.date}</td>
                    <td className="px-4 py-3 border border-gray-300">
                      <Link href={row.href} className="text-red-600 hover:underline hover:text-blue-600 transition-colors">
                        {row.label}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* M.TECH Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-3">M.TECH</h3>
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-foreground">
                  <th className="w-48 px-4 py-3 text-left font-semibold border border-gray-300">Updated Date</th>
                  <th className="px-4 py-3 text-left font-semibold border border-gray-300">Academic Calendars</th>
                </tr>
              </thead>
              <tbody>
                {mtechCalendars.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/40 transition-colors">
                    <td className="px-4 py-3 border border-gray-300 text-muted-foreground">{row.date}</td>
                    <td className="px-4 py-3 border border-gray-300">
                      <Link href={row.href} className="text-red-600 hover:underline hover:text-blue-600 transition-colors">
                        {row.label}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MBA Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-3">MBA</h3>
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="min-w-full text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-foreground">
                  <th className="w-48 px-4 py-3 text-left font-semibold border border-gray-300">Updated on</th>
                  <th className="px-4 py-3 text-left font-semibold border border-gray-300">Academic Calendars</th>
                </tr>
              </thead>
              <tbody>
                {mbaCalendars.map((row, idx) => (
                  <tr key={idx} className="bg-white hover:bg-blue-50/40 transition-colors">
                    <td className="px-4 py-3 border border-gray-300 text-muted-foreground">{row.date}</td>
                    <td className="px-4 py-3 border border-gray-300">
                      <Link href={row.href} className="text-red-600 hover:underline hover:text-blue-600 transition-colors">
                        {row.label}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}


