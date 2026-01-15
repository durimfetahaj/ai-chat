import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <h1 className="text-8xl">Welcome to the Chat Page</h1>
      <Suspense>
        <AuthButton />
      </Suspense>
    </div>
  );
}
