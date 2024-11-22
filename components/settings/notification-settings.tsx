import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Notification Preferences</h2>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Email Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {emailNotifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div>
                <p className="font-medium text-white">{notification.title}</p>
                <p className="text-sm text-slate-400">{notification.description}</p>
              </div>
              <Switch defaultChecked={notification.enabled} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">App Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {appNotifications.map((notification, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div>
                <p className="font-medium text-white">{notification.title}</p>
                <p className="text-sm text-slate-400">{notification.description}</p>
              </div>
              <Switch defaultChecked={notification.enabled} />
            </div>
          ))}
          <Button className="w-full bg-indigo-500 hover:bg-indigo-600">
            Save Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

const emailNotifications = [
  {
    title: "Pet Health Reminders",
    description: "Receive emails about upcoming vaccinations and check-ups",
    enabled: true,
  },
  {
    title: "Activity Summaries",
    description: "Weekly summary of your pets' activities",
    enabled: true,
  },
  {
    title: "Product Updates",
    description: "News about app updates and new features",
    enabled: false,
  },
];

const appNotifications = [
  {
    title: "Push Notifications",
    description: "Receive push notifications on your device",
    enabled: true,
  },
  {
    title: "Daily Reminders",
    description: "Get reminded about daily pet care tasks",
    enabled: true,
  },
  {
    title: "Social Updates",
    description: "Notifications about community activity",
    enabled: false,
  },
];