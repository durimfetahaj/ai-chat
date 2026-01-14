import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  async function UserDetails() {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims) {
      redirect("/auth/login");
    }

    return JSON.stringify(data.claims, null, 2);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-screen-lg">
        <Suspense>
          <UserDetails />
        </Suspense>
        <h1 className="text-9xl">Welcome to Chat AI APP</h1>
      </div>
    </main>
  );
}
