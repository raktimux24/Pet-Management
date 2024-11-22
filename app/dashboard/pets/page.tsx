import { DashboardHeader } from "@/components/dashboard/header";
import { PetsList } from "@/components/pets/pets-list";

export default function PetsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <PetsList />
      </main>
    </div>
  );
}