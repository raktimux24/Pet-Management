import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Activity } from "lucide-react";
import { ActivityModal } from "./activity-modal";

export function PetActivities() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Activity Log</h2>
        <ActivityModal
          trigger={
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              <Plus className="mr-2 h-5 w-5" />
              Log Activity
            </Button>
          }
        />
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Activity className="mr-2 h-5 w-5 text-indigo-500" />
            Recent Activities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-slate-700"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-white">{activity.type}</h4>
                    <p className="mt-1 text-sm text-slate-400">
                      {activity.timestamp}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
                <div className="mt-2 grid gap-2 text-slate-300">
                  <p>Duration: {activity.duration}</p>
                  <p>Notes: {activity.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const activities = [
  {
    type: "Morning Walk",
    timestamp: "Today at 8:00 AM",
    duration: "30 minutes",
    notes: "Energetic walk, played with other dogs at the park",
  },
  {
    type: "Training Session",
    timestamp: "Yesterday at 4:00 PM",
    duration: "20 minutes",
    notes: "Practiced basic commands, showing good progress",
  },
  {
    type: "Playtime",
    timestamp: "Yesterday at 2:00 PM",
    duration: "45 minutes",
    notes: "Indoor play session with favorite toys",
  },
];