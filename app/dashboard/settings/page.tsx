"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { SettingsNav } from "@/components/settings/settings-nav";
import { AccountSettings } from "@/components/settings/account-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SecuritySettings } from "@/components/settings/security-settings";
import { AppearanceSettings } from "@/components/settings/appearance-settings";
import { useState } from "react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <SettingsNav activeSection={activeSection} onSelect={setActiveSection} />
          <div className="flex-1 space-y-6">
            {activeSection === "account" && <AccountSettings />}
            {activeSection === "notifications" && <NotificationSettings />}
            {activeSection === "security" && <SecuritySettings />}
            {activeSection === "appearance" && <AppearanceSettings />}
          </div>
        </div>
      </main>
    </div>
  );
}