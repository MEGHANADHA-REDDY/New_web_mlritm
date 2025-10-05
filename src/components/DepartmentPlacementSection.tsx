"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
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
  Briefcase
} from "lucide-react";

interface PlacementData {
  notifications: {
    id: string;
    title: string;
    date: string;
    description: string;
    link?: string;
  }[];
  reviews: {
    id: string;
    title: string;
    date: string;
    description: string;
    link?: string;
  }[];
  selectedStudents: {
    year: string;
    totalStudents: number;
    placedStudents: number;
    placementRate: number;
    avgPackage: string;
    highestPackage: string;
    topCompanies: string[];
  }[];
}

interface DepartmentPlacementSectionProps {
  departmentName: string;
  placementData: PlacementData;
}

export default function DepartmentPlacementSection({ 
  departmentName, 
  placementData 
}: DepartmentPlacementSectionProps) {
  const [activeTab, setActiveTab] = useState("notifications");

  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold text-foreground">
            {departmentName} - Placement Information
          </h3>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-7 w-full mb-8">
            <TabsTrigger value="notifications" className="flex items-center gap-2 text-xs">
              <FileText className="w-3 h-3" />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2 text-xs">
              <Star className="w-3 h-3" />
              <span className="hidden sm:inline">Reviews</span>
            </TabsTrigger>
            <TabsTrigger value="2019-21" className="text-xs">
              2019-21
            </TabsTrigger>
            <TabsTrigger value="2021-22" className="text-xs">
              2021-22
            </TabsTrigger>
            <TabsTrigger value="2022-23" className="text-xs">
              2022-23
            </TabsTrigger>
            <TabsTrigger value="2023-24" className="text-xs">
              2023-24
            </TabsTrigger>
            <TabsTrigger value="2024-25" className="text-xs">
              2024-25
            </TabsTrigger>
          </TabsList>

          {/* Placement Notifications */}
          <TabsContent value="notifications" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Placement Notifications</h4>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div className="space-y-3">
              {placementData.notifications.map((notification) => (
                <Card key={notification.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1">{notification.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{notification.date}</span>
                          <Badge variant="outline" className="text-xs">Notification</Badge>
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
          </TabsContent>

          {/* Placement Reviews */}
          <TabsContent value="reviews" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Placement Reviews</h4>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
            <div className="space-y-3">
              {placementData.reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold mb-1">{review.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{review.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{review.date}</span>
                          <Badge variant="outline" className="text-xs">Review</Badge>
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
          </TabsContent>

          {/* Selected Students by Year */}
          {placementData.selectedStudents.map((yearData) => (
            <TabsContent key={yearData.year} value={yearData.year} className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Students Selected in {yearData.year}</h4>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-semibold">{yearData.year} Placement Statistics</h5>
                    <Badge variant="secondary" className="text-sm">
                      {yearData.placementRate}% Placement Rate
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{yearData.totalStudents}</div>
                      <div className="text-sm text-muted-foreground">Total Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{yearData.placedStudents}</div>
                      <div className="text-sm text-muted-foreground">Placed Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{yearData.avgPackage}</div>
                      <div className="text-sm text-muted-foreground">Average Package</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{yearData.highestPackage}</div>
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </motion.div>
  );
}
