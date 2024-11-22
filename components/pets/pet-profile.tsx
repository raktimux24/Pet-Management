"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PetProfileHeader } from "@/components/pets/pet-profile-header";
import { PetOverview } from "@/components/pets/pet-overview";
import { PetHealth } from "@/components/pets/pet-health";
import { PetRoutines } from "@/components/pets/pet-routines";
import { PetActivities } from "@/components/pets/pet-activities";
import { PetSettings } from "@/components/pets/pet-settings";

interface PetProfileProps {
  petId: string;
}

export function PetProfile({ petId }: PetProfileProps) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1">
      <PetProfileHeader petId={petId} />
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-slate-800 border-slate-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="health">Health Records</TabsTrigger>
            <TabsTrigger value="routines">Routines</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <PetOverview petId={petId} />
          </TabsContent>
          <TabsContent value="health">
            <PetHealth petId={petId} />
          </TabsContent>
          <TabsContent value="routines">
            <PetRoutines petId={petId} />
          </TabsContent>
          <TabsContent value="activities">
            <PetActivities petId={petId} />
          </TabsContent>
          <TabsContent value="settings">
            <PetSettings petId={petId} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}