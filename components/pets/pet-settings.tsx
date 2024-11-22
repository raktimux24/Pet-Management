import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AlertTriangle } from "lucide-react";

export function PetSettings() {
  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Pet Name</Label>
              <Input
                id="name"
                defaultValue="Bella"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="breed">Breed</Label>
              <Input
                id="breed"
                defaultValue="Golden Retriever"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                defaultValue="3 years"
                className="bg-slate-900 border-slate-700"
              />
            </div>
          </div>
          <Button className="w-full bg-indigo-500 hover:bg-indigo-600">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {notificationSettings.map((setting, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div>
                <p className="font-medium text-white">{setting.title}</p>
                <p className="text-sm text-slate-400">{setting.description}</p>
              </div>
              <Switch defaultChecked={setting.enabled} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-red-500 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-300">
              Once you delete a pet profile, there is no going back. Please be
              certain.
            </p>
            <Button variant="destructive" className="w-full">
              Delete Pet Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const notificationSettings = [
  {
    title: "Health Reminders",
    description: "Get notified about vaccinations and check-ups",
    enabled: true,
  },
  {
    title: "Activity Reminders",
    description: "Reminders for walks and feeding times",
    enabled: true,
  },
  {
    title: "Medication Alerts",
    description: "Notifications for medication schedules",
    enabled: false,
  },
];