import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "./components/client/Provider/ReduxProvider";

export const metadata: Metadata = {
  title: "Personal Sketch Book",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
