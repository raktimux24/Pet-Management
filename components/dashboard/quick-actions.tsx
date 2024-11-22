"use client";

import { Button } from "@/components/ui/button";
import { Plus, X, Activity, Calendar, Stethoscope } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ActivityModal } from "@/components/pets/activity-modal";
import { HealthRecordModal } from "@/components/pets/health-record-modal";
import { RoutineModal } from "@/components/pets/routine-modal";

export function QuickActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    {
      icon: Stethoscope,
      label: "Health Record",
      modal: "health",
    },
    {
      icon: Calendar,
      label: "Schedule",
      modal: "routine",
    },
    {
      icon: Activity,
      label: "Log Activity",
      modal: "activity",
    },
  ];

  const renderButton = (Icon: any, label: string, className: string, style: any) => (
    <Button
      size="icon"
      className={className}
      style={style}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Button>
  );

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 pointer-events-none">
      <div
        className={cn(
          "flex flex-col items-end space-y-2 transition-all duration-300 pointer-events-auto",
          isExpanded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}
      >
        {actions.map(({ icon: Icon, label, modal }, index) => {
          const buttonClassName = cn(
            "h-12 w-12 rounded-full bg-cyan-400 text-slate-900 shadow-lg hover:bg-cyan-500 transition-all duration-300",
            isExpanded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          );
          const buttonStyle = { transitionDelay: `${index * 50}ms` };

          if (modal === "activity") {
            return (
              <ActivityModal
                key={label}
                trigger={renderButton(Icon, label, buttonClassName, buttonStyle)}
              />
            );
          } else if (modal === "health") {
            return (
              <HealthRecordModal
                key={label}
                trigger={renderButton(Icon, label, buttonClassName, buttonStyle)}
              />
            );
          } else if (modal === "routine") {
            return (
              <RoutineModal
                key={label}
                trigger={renderButton(Icon, label, buttonClassName, buttonStyle)}
              />
            );
          } else {
            return (
              <Button
                key={label}
                size="icon"
                className={buttonClassName}
                style={buttonStyle}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Button>
            );
          }
        })}
      </div>
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 pointer-events-auto transition-transform duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="relative h-6 w-6">
          <Plus
            className={cn(
              "absolute inset-0 h-6 w-6 transition-all duration-200",
              isExpanded ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            )}
          />
          <X
            className={cn(
              "absolute inset-0 h-6 w-6 transition-all duration-200",
              isExpanded ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            )}
          />
        </div>
      </Button>
    </div>
  );
}