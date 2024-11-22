import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardFooter } from "@/components/dashboard/footer";
import { PetProfile } from "@/components/pets/pet-profile";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
  ];
}

export default function PetProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <DashboardHeader />
      <PetProfile petId={params.id} />
      <DashboardFooter />
    </div>
  );
}