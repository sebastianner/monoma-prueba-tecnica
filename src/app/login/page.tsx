"use client";
import { LoginForm } from "@/components/login/LoginForm";
import { redirect } from "next/navigation";

export default function Page() {
  if (typeof window !== "undefined") {
    const session = localStorage.getItem("session");
    if (session) {
      redirect("/dashboard");
    }
  }

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <LoginForm />
    </main>
  );
}
