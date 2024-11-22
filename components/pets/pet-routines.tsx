import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Clock, Calendar as CalendarIcon } from "lucide-react";
import { RoutineModal } from "./routine-modal";

export function PetRoutines() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Daily Routines</h2>
        <RoutineModal
          trigger={
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              <Plus className="mr-2 h-5 w-5" />
              Add Routine
            </Button>
          }
        />
      </div>

      <div className="grid gap-6">
        {routinesByDay.map((day, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <CalendarIcon className="mr-2 h-5 w-5 text-indigo-500" />
                {day.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {day.routines.map((routine, routineIndex) => (
                  <div
                    key={routineIndex}
                    className="flex items-center space-x-4 p-4 rounded-lg border border-slate-700"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-indigo-500" />
                        <span className="font-medium text-white">
                          {routine.time}
                        </span>
                      </div>
                      <p className="mt-1 text-slate-300">{routine.activity}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const routinesByDay = [
  {
    name: "Weekdays",
    routines: [
      { time: "7:00 AM", activity: "Morning Walk" },
      { time: "8:00 AM", activity: "Breakfast" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "5:00 PM", activity: "Evening Walk" },
      { time: "7:00 PM", activity: "Dinner" },
    ],
  },
  {
    name: "Weekends",
    routines: [
      { time: "8:00 AM", activity: "Morning Walk" },
      { time: "9:00 AM", activity: "Breakfast" },
      { time: "12:00 PM", activity: "Lunch" },
      { time: "4:00 PM", activity: "Park Visit" },
      { time: "7:00 PM", activity: "Dinner" },
    ],
  },
];