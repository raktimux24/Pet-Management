import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const reminders = [
  {
    id: 1,
    pet: "Bella",
    event: "Vaccination",
    date: "Tomorrow",
    time: "10:00 AM",
  },
  {
    id: 2,
    pet: "Max",
    event: "Vet Checkup",
    date: "In 3 days",
    time: "2:30 PM",
  },
  {
    id: 3,
    pet: "Bella",
    event: "Grooming",
    date: "Next week",
    time: "11:00 AM",
  },
];

export function UpcomingReminders() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Upcoming Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-center space-x-4 rounded-lg border border-slate-700 p-4"
            >
              <div className="flex-1">
                <p className="font-medium text-white">
                  {reminder.pet} - {reminder.event}
                </p>
                <div className="mt-1 flex items-center text-sm text-slate-400">
                  <Calendar className="mr-2 h-4 w-4" />
                  {reminder.date}
                  <Clock className="ml-4 mr-2 h-4 w-4" />
                  {reminder.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}