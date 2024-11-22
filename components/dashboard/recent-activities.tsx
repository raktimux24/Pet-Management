import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

const activities = [
  {
    id: 1,
    pet: "Bella",
    activity: "Morning Walk",
    time: "30 minutes ago",
    details: "Walked for 2 km",
  },
  {
    id: 2,
    pet: "Max",
    activity: "Feeding",
    time: "2 hours ago",
    details: "Regular meal",
  },
  {
    id: 3,
    pet: "Bella",
    activity: "Medication",
    time: "4 hours ago",
    details: "Anti-flea treatment",
  },
];

export function RecentActivities() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center space-x-4 rounded-lg border border-slate-700 p-4"
            >
              <div className="flex-1">
                <p className="font-medium text-white">
                  {activity.pet} - {activity.activity}
                </p>
                <div className="mt-1 flex items-center text-sm text-slate-400">
                  <Activity className="mr-2 h-4 w-4" />
                  {activity.time}
                  <span className="ml-4">{activity.details}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}