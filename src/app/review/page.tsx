"use client";

import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";

export default function ReviewPage() {
  const { formData } = useFormData();
  const router = useRouter();

  const handleBack = () => {
    router.push("/step3");
  };

  const handleSubmit = () => {
    console.log("Submitting...", formData);
    router.push("/success");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>
      <div className="w-[80%] max-w-2xl pt-40 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Review Your Information
        </h2>

        <div className=" bg-white grid grid-cols-2 gap-3 text-gray-700">
          {Object.entries(formData).map(([key, value]) => (
            <React.Fragment key={key}>
              <div className="font-semibold capitalize">{key}:</div>
              <div>{value?.toString()}</div>
            </React.Fragment>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 active:scale-95 transition-transform duration-150"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-gray-600 text-white rounded font-semibold hover:bg-gray-800 active:scale-95 transition-transform duration-150"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
