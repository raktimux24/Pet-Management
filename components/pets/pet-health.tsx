import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText } from "lucide-react";
import { HealthRecordModal } from "./health-record-modal";

export function PetHealth() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Health Records</h2>
        <HealthRecordModal
          trigger={
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              <Plus className="mr-2 h-5 w-5" />
              Add Record
            </Button>
          }
        />
      </div>

      <div className="grid gap-6">
        {healthRecords.map((record, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="mr-2 h-5 w-5 text-indigo-500" />
                {record.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {record.entries.map((entry, entryIndex) => (
                  <div
                    key={entryIndex}
                    className="p-4 rounded-lg border border-slate-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-white">{entry.title}</h4>
                        <p className="mt-1 text-sm text-slate-400">
                          {entry.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                    <p className="mt-2 text-slate-300">{entry.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const healthRecords = [
  {
    type: "Vaccinations",
    entries: [
      {
        title: "DHPP Booster",
        date: "March 15, 2024",
        description: "Annual vaccination completed. Next due in 12 months.",
      },
      {
        title: "Rabies Vaccine",
        date: "January 10, 2024",
        description: "3-year vaccination administered.",
      },
    ],
  },
  {
    type: "Vet Visits",
    entries: [
      {
        title: "Regular Check-up",
        date: "February 28, 2024",
        description: "General health examination. All parameters normal.",
      },
      {
        title: "Dental Cleaning",
        date: "December 5, 2023",
        description: "Professional dental cleaning and examination.",
      },
    ],
  },
];