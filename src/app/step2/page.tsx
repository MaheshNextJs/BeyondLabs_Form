"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import { FormData } from "@/types/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Step2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setFormData, formData } = useFormData();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setFormData({ ...formData, ...data });
    router.push("/step3");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-32">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] flex flex-col items-center gap-4"
        >
          <input
            {...register("age", {
              required: "Age is required",
              min: { value: 1, message: "Age must be at least 1" },
            })}
            defaultValue={formData.age}
            placeholder="Age"
            type="number"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.age && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.age.message}
            </p>
          )}

          <input
            {...register("gender", { required: "Gender is required" })}
            defaultValue={formData.gender}
            placeholder="Gender"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.gender && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.gender.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full max-w-md p-4 bg-gray-700 font-bold text-white my-10 rounded"
          >
            Next
          </button>
        </form>
      </main>
      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}
