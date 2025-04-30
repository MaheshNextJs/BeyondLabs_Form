"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FormData } from "@/types/form";

interface FormContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormData must be used within a FormProvider");
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <FormContext.Provider
      value={{ formData, setFormData, currentStep, setCurrentStep }}
    >
      {children}
    </FormContext.Provider>
  );
};
