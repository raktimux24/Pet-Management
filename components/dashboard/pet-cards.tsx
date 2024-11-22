"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Activity } from "lucide-react";
import Image from "next/image";
import { AddPetModal } from "../pets/add-pet-modal";

const pets = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24",
    nextEvent: "Vaccination due tomorrow",
  },
  {
    id: 2,
    name: "Max",
    breed: "Siamese Cat",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26",
    nextEvent: "Vet checkup in 3 days",
  },
];

export function PetCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet) => (
        <Card key={pet.id} className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{pet.name}</h3>
                <p className="text-sm text-slate-400">{pet.breed}</p>
              </div>
              <Button size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                <Activity className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-300">{pet.nextEvent}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      <AddPetModal
        trigger={
          <Button
            variant="outline"
            className="h-full min-h-[160px] border-2 border-dashed border-slate-700 bg-slate-800/50 hover:bg-slate-800 flex items-center justify-center"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add New Pet
          </Button>
        }
      />
    </div>
  );
}