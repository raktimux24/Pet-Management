import { Button } from "@/components/ui/button";
import { Edit, Activity } from "lucide-react";
import Image from "next/image";
import { ActivityModal } from "./activity-modal";

interface PetProfileHeaderProps {
  petId: string;
}

export function PetProfileHeader({ petId }: PetProfileHeaderProps) {
  // In a real app, you would fetch this data based on the petId
  const pet = {
    name: "Bella",
    age: "3 years",
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24",
  };

  return (
    <div className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-8">
          <div className="relative h-32 w-32">
            <Image
              src={pet.image}
              alt={pet.name}
              fill
              className="rounded-full object-cover border-4 border-indigo-500"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-white">{pet.name}</h1>
              <Button variant="ghost" size="icon">
                <Edit className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-2 space-x-4 text-slate-300">
              <span>{pet.age}</span>
              <span>•</span>
              <span>{pet.breed}</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <ActivityModal
              trigger={
                <Button className="bg-indigo-500 hover:bg-indigo-600">
                  <Activity className="mr-2 h-5 w-5" />
                  Log Activity
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}