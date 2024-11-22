import { DashboardHeader } from "@/components/dashboard/header";
import { PetCards } from "@/components/dashboard/pet-cards";
import { UpcomingReminders } from "@/components/dashboard/upcoming-reminders";
import { RecentActivities } from "@/components/dashboard/recent-activities";
import { QuickActions } from "@/components/dashboard/quick-actions";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold text-white">Welcome back, Alex!</h1>
          <PetCards />
          <div className="grid lg:grid-cols-2 gap-8">
            <UpcomingReminders />
            <RecentActivities />
          </div>
        </div>
      </main>
      <QuickActions />
    </div>
  );
}