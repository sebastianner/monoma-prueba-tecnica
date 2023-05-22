"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("session");
      if (!session) {
        redirect("/login");
      }
    }
  }, []);

  return <>{children}</>;
}
