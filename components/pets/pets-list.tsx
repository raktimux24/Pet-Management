"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Activity, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AddPetModal } from "./add-pet-modal";

const pets = [
  {
    id: 1,
    name: "Bella",
    breed: "Golden Retriever",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24",
    nextEvent: "Vaccination due tomorrow",
  },
  {
    id: 2,
    name: "Max",
    breed: "Siamese Cat",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26",
    nextEvent: "Vet checkup in 3 days",
  },
];

export function PetsList() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">My Pets</h1>
        <AddPetModal
          trigger={
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              <Plus className="mr-2 h-5 w-5" />
              Add New Pet
            </Button>
          }
        />
      </div>

      <div className="grid gap-6">
        {pets.map((pet) => (
          <Card key={pet.id} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="relative h-24 w-24">
                  <Image
                    src={pet.image}
                    alt={pet.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{pet.name}</h3>
                  <p className="text-slate-400">{pet.breed}</p>
                  <p className="text-slate-400">{pet.age}</p>
                  <p className="mt-2 text-slate-300">{pet.nextEvent}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                    <Activity className="h-5 w-5" />
                  </Button>
                  <Link href={`/dashboard/pets/${pet.id}`}>
                    <Button className="bg-indigo-500 hover:bg-indigo-600">
                      View Profile
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}