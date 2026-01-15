import { Spinner } from "@/components/ui/spinner";
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import { ChatView } from "./components/chat-view";
import { Message } from "@/types/chat";

async function MessagesData() {
  const supabase = await createClient();
  const { data: messages } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });

  return <ChatView messages={messages as Message[]} />;
}

export default async function ChatPage() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen text-2xl">
      <Suspense
        fallback={
          <div className="flex items-center gap-4">
            <Spinner className="size-5" />
            Loading messages...
          </div>
        }
      >
        <MessagesData />
      </Suspense>
    </div>
  );
}
