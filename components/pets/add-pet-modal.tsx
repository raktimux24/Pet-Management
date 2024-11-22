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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface AddPetModalProps {
  trigger: React.ReactNode;
}

const steps = [
  {
    title: "Basic Information",
    description: "Start with your pet's basic details",
  },
  {
    title: "Appearance",
    description: "Add information about your pet's appearance",
  },
  {
    title: "Health Details",
    description: "Include important health details",
  },
];

export function AddPetModal({ trigger }: AddPetModalProps) {
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      // Handle final form submission
      setOpen(false);
      setCurrentStep(0);
    } else {
      handleNext();
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col items-center w-1/3 text-center",
              index === currentStep
                ? "text-white"
                : index < currentStep
                ? "text-indigo-500"
                : "text-slate-500"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                index === currentStep
                  ? "bg-indigo-500"
                  : index < currentStep
                  ? "bg-indigo-900"
                  : "bg-slate-700"
              )}
            >
              {index < currentStep ? "✓" : index + 1}
            </div>
            <div className="text-sm font-medium">{step.title}</div>
            <div className="text-xs text-slate-400 px-2">{step.description}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 h-1 bg-slate-700 rounded-full">
        <div
          className="h-full bg-indigo-500 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );

  const renderBasicInfo = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="pet-name">Pet Name</Label>
        <Input
          id="pet-name"
          placeholder="Enter your pet's name"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="species">Species</Label>
        <Select>
          <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-400">
            <SelectValue placeholder="Select species" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dog">Dog</SelectItem>
            <SelectItem value="cat">Cat</SelectItem>
            <SelectItem value="bird">Bird</SelectItem>
            <SelectItem value="fish">Fish</SelectItem>
            <SelectItem value="reptile">Reptile</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="breed">Breed</Label>
        <Input
          id="breed"
          placeholder="Enter breed (if known)"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup defaultValue="unknown" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="unknown" id="unknown" />
            <Label htmlFor="unknown">Unknown</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="pet-photo">Pet Photo</Label>
        <Input
          id="pet-photo"
          type="file"
          accept="image/*"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="color">Color/Markings</Label>
        <Input
          id="color"
          placeholder="Describe your pet's appearance"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
    </div>
  );

  const renderHealthDetails = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="birth-date">Date of Birth</Label>
        <Input
          id="birth-date"
          type="date"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="microchip">Microchip ID</Label>
        <Input
          id="microchip"
          placeholder="Enter microchip ID (if available)"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="medical-notes">Medical Notes</Label>
        <Textarea
          id="medical-notes"
          placeholder="Any important medical information"
          className="bg-slate-900 border-slate-700 text-slate-400"
        />
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-slate-800 border-slate-700 dialog-content">
        <DialogHeader>
          <DialogTitle className="text-white">Add New Pet</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStepIndicator()}
          
          {currentStep === 0 && renderBasicInfo()}
          {currentStep === 1 && renderAppearance()}
          {currentStep === 2 && renderHealthDetails()}

          <div className="flex justify-end space-x-2">
            {currentStep > 0 && (
              <Button
                type="button"
                variant="secondary"
                onClick={handleBack}
                className="!text-slate-900"
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600"
            >
              {currentStep === steps.length - 1 ? "Add Pet" : "Next"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}