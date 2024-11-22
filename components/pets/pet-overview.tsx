import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Activity, Heart } from "lucide-react";

export function PetOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-indigo-500" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg border border-slate-700"
            >
              <div className="flex-1">
                <p className="font-medium text-white">{event.title}</p>
                <p className="text-sm text-slate-400">{event.date}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Activity className="mr-2 h-5 w-5 text-indigo-500" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg border border-slate-700"
            >
              <div className="flex-1">
                <p className="font-medium text-white">{activity.title}</p>
                <p className="text-sm text-slate-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700 md:col-span-2">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Heart className="mr-2 h-5 w-5 text-indigo-500" />
            Health Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {healthSummary.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-slate-700"
              >
                <h4 className="font-medium text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const upcomingEvents = [
  { title: "Vaccination Due", date: "Tomorrow at 10:00 AM" },
  { title: "Grooming Session", date: "Next Week, Monday" },
  { title: "Vet Check-up", date: "In 2 weeks" },
];

const recentActivities = [
  { title: "Morning Walk", time: "Today at 8:00 AM" },
  { title: "Feeding", time: "Today at 12:00 PM" },
  { title: "Evening Play Session", time: "Yesterday at 5:00 PM" },
];

const healthSummary = [
  { title: "Weight", value: "28.5 kg" },
  { title: "Last Vet Visit", value: "2 weeks ago" },
  { title: "Next Vaccination", value: "Due tomorrow" },
];