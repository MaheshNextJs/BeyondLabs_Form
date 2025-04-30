"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const startForm = () => {
    router.push("/step1");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      <Header />
      <p className="text-lg text-gray-800 mb-4">
        Please follow the steps to complete your information.
      </p>
      <button
        onClick={startForm}
        className="px-6 py-3 bg-gray-600 text-white rounded my-10 font-semibold hover:bg-gray-800 active:scale-95 transition-transform duration-150"
      >
        Start Form
      </button>
      <Footer />
    </div>
  );
}
