"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import { FormData } from "@/types/form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { setFormData, formData } = useFormData();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setFormData({ ...formData, ...data });
    router.push("/review");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center my-20 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] flex flex-col items-center pt-20 gap-4"
        >
          <input
            {...register("doorNumber", {
              required: "*Door Number is required",
            })}
            defaultValue={formData.doorNumber}
            placeholder="Door Number"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.doorNumber && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.doorNumber.message}
            </p>
          )}

          <input
            {...register("street", { required: "*Street is required" })}
            defaultValue={formData.street}
            placeholder="Street"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.street && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.street.message}
            </p>
          )}

          <input
            {...register("province", { required: "*City is required" })}
            defaultValue={formData.province}
            placeholder="City"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.province && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.province.message}
            </p>
          )}

          <input
            {...register("state", { required: "*State is required" })}
            defaultValue={formData.state}
            placeholder="State"
            className="w-full max-w-md p-4 border border-gray-600 rounded"
          />
          {errors.state && (
            <p className="text-red-500 text-sm max-w-md w-full">
              {errors.state.message}
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
