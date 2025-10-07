"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import ContactFooter from "@/components/ContactFooter";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:examcell@mlritm.ac.in?subject=${encodeURIComponent(
      subject || "Enquiry from Contact Form"
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;
  };

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
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 mb-4 hover:bg-accent"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Contact Us</h1>
          <p className="text-xl text-primary font-semibold mb-6">
            We’d love to hear from you. Reach out anytime.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="lg:col-span-1 space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:examcell@mlritm.ac.in" className="font-semibold hover:underline">
                      examcell@mlritm.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+910000000000" className="font-semibold hover:underline">
                      +91 00000 00000
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold">MLRITM Campus, Hyderabad, Telangana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Office Hours</p>
                    <p className="font-semibold">Mon - Sat: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Badge variant="secondary" className="text-xs">Examination Cell</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-full h-[280px] overflow-hidden rounded-md">
                  <iframe
                    title="MLRITM Location"
                    src="https://www.google.com/maps?q=MLRITM%20Hyderabad&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground">Your Name</label>
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Email</label>
                      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Phone</label>
                      <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(+91) 00000 00000" />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Subject</label>
                      <Input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="How can we help?" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Message</label>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message..." className="min-h-[140px]" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">We’ll respond within 1-2 business days.</p>
                    <Button type="submit">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      <ContactFooter />
    </div>
  );
}


