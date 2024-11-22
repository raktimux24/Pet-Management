"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell, Check, Clock, Calendar, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationPanelProps {
  trigger: React.ReactNode;
}

const notifications = [
  {
    id: 1,
    title: "Vaccination Due",
    description: "Bella's vaccination is due tomorrow at 10:00 AM",
    time: "1 hour ago",
    type: "upcoming",
    icon: Calendar,
    read: false,
  },
  {
    id: 2,
    title: "Medication Reminder",
    description: "Time for Max's evening medication",
    time: "3 hours ago",
    type: "alert",
    icon: Clock,
    read: false,
  },
  {
    id: 3,
    title: "Vet Visit Scheduled",
    description: "Appointment confirmed for next Monday",
    time: "5 hours ago",
    type: "info",
    icon: Stethoscope,
    read: true,
  },
];

export function NotificationPanel({ trigger }: NotificationPanelProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-slate-800 border-slate-700">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Notifications</h3>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
            Mark all as read
          </Button>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "flex items-start gap-3 p-4 hover:bg-slate-700/50 transition-colors",
                !notification.read && "bg-slate-700/25"
              )}
            >
              <div className="mt-1">
                <notification.icon className="h-5 w-5 text-indigo-500" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                  )}
                </div>
                <p className="text-sm text-slate-400">{notification.description}</p>
                <p className="text-xs text-slate-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-700">
          <Button
            variant="outline"
            className="w-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700"
          >
            View All Notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}