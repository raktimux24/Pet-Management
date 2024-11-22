import { Button } from "@/components/ui/button";
import { User, Bell, Shield, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

interface SettingsNavProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

export function SettingsNav({ activeSection, onSelect }: SettingsNavProps) {
  const navItems = [
    { id: "account", label: "Account", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
  ];

  return (
    <nav className="w-full md:w-64 space-y-1">
      {navItems.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          variant="ghost"
          className={cn(
            "w-full justify-start",
            activeSection === id
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-white hover:bg-slate-800"
          )}
          onClick={() => onSelect(id)}
        >
          <Icon className="mr-2 h-5 w-5" />
          {label}
        </Button>
      ))}
    </nav>
  );
}