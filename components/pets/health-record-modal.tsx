"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

interface HealthRecordModalProps {
  trigger: React.ReactNode;
}

export function HealthRecordModal({ trigger }: HealthRecordModalProps) {
  const [open, setOpen] = useState(false);
  const [recordType, setRecordType] = useState<"vaccination" | "vet-visit">("vaccination");
  const now = new Date();
  const [date, setDate] = useState(format(now, "yyyy-MM-dd"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-800 border-slate-700 dialog-content">
        <DialogHeader>
          <DialogTitle className="text-white">Add Health Record</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="record-type">Record Type</Label>
            <Select
              value={recordType}
              onValueChange={(value: "vaccination" | "vet-visit") => setRecordType(value)}
            >
              <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-400">
                <SelectValue placeholder="Select record type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vaccination">Vaccination</SelectItem>
                <SelectItem value="vet-visit">Vet Visit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {recordType === "vaccination" ? (
            <div className="space-y-2">
              <Label htmlFor="vaccine-name">Vaccine Name</Label>
              <Select>
                <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-400">
                  <SelectValue placeholder="Select vaccine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rabies">Rabies</SelectItem>
                  <SelectItem value="dhpp">DHPP</SelectItem>
                  <SelectItem value="bordetella">Bordetella</SelectItem>
                  <SelectItem value="leptospirosis">Leptospirosis</SelectItem>
                  <SelectItem value="fvrcp">FVRCP (Cats)</SelectItem>
                  <SelectItem value="felv">FeLV (Cats)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="visit-reason">Reason for Visit</Label>
              <Select>
                <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-400">
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="check-up">Regular Check-up</SelectItem>
                  <SelectItem value="illness">Illness</SelectItem>
                  <SelectItem value="injury">Injury</SelectItem>
                  <SelectItem value="dental">Dental Care</SelectItem>
                  <SelectItem value="surgery">Surgery</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-slate-900 border-slate-700 text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              className="bg-slate-900 border-slate-700 text-slate-400"
              placeholder={
                recordType === "vaccination"
                  ? "Add any details about the vaccination..."
                  : "Add details about the vet visit..."
              }
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
              className="!text-slate-900"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-500 hover:bg-indigo-600">
              Save Record
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}