import { AuthButton } from "@/components/auth-button";
import { Suspense, type ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="fixed top-0 right-0 z-10 p-4">
        <Suspense>
          <AuthButton />
        </Suspense>
      </div>
      <main className="flex-1 flex flex-col ">{children}</main>
    </div>
  );
}
