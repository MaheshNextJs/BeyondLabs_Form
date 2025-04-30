"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import { FormData } from "@/types/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setFormData, formData } = useFormData();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setFormData({ ...formData, ...data });
    router.push("/step2");
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
            {...register("name", { required: "Name is required" })}
            defaultValue={formData.name}
            placeholder="Full Name"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.name.message}
            </p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            defaultValue={formData.email}
            placeholder="Email"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.email.message}
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
