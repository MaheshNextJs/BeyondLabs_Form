import "./globals.css";
import { FormProvider } from "@/context/FormContext";

export const metadata = {
  title: "Multi-Step Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
      </head>
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  );
}
