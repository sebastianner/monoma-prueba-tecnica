"use client";
import { useEffect } from "react";
import { NavBar } from "@/components/dashboard";
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = localStorage.getItem("session");
      if (!session) {
        redirect("/login");
      }
    }
  }, []);

  return (
    <>
      <>
        <NavBar />
        <main className="w-10/12 my-0 mx-auto">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, 290px)",
              gridTemplateRows: "repeat(auto-fill, 1fr)",
              gap: "10px",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            {children}
          </div>
        </main>
      </>
    </>
  );
}
