"use client"; // Ensure this is the first line in the file

import { JSX, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormData } from "@/context/FormContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SuccessPage() {
  const [countdown, setCountdown] = useState(5);
  const [sparkles, setSparkles] = useState<JSX.Element[]>([]); // State to hold sparkle elements
  const router = useRouter();
  const { setFormData } = useFormData();

  useEffect(() => {
    setFormData({}); // Clear form data

    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval); // Clear the interval
      router.push("/step1"); // Navigate to step1
    }, countdown * 1000);

    // Generate sparkles on client
    const generateSparkles = () => {
      const sparklesArray = [];
      const numberOfSparkles = 100; // Number of sparkles to generate

      for (let i = 0; i < numberOfSparkles; i++) {
        const randomTop = Math.random();
        const randomLeft = Math.random();

        sparklesArray.push(
          <div
            className="sparkle"
            style={
              {
                "--top": randomTop,
                "--left": randomLeft,
              } as React.CSSProperties
            }
            key={i}
          />
        );
      }
      setSparkles(sparklesArray);
    };

    // Generate sparkles only on the client side (after the first render)
    generateSparkles();

    // Cleanup on unmount
    return () => {
      clearInterval(countdownInterval);
      clearTimeout(timeout);
    };
  }, [router, setFormData, countdown]);

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 relative">
      {/* Sparkle Container */}
      <div className="sparkle-container">{sparkles}</div>

      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      <h1 className="text-3xl font-bold mt-50 text-green-600 mb-4">Success!</h1>
      <p className="text-lg mb-6">
        Your information has been submitted successfully.
      </p>
      <p className="text-sm text-gray-500">
        Redirecting to home page in {countdown} second{countdown > 1 ? "s" : ""}
        ...
      </p>
      <Footer />
    </div>
  );
}
