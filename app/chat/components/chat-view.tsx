"use client";

import { useEffect, useRef } from "react";
import { MessageBubble } from "./message-bubble";
import { ChatInput } from "./chat-input";
import { Message } from "@/types/chat";

interface ChatViewProps {
  messages: Message[];
}

export const ChatView = ({ messages }: ChatViewProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-3xl px-4 pt-10 pb-48 flex flex-col space-y-6">
        {messages.length === 0 ? (
          <div className="h-[60vh] flex items-center justify-center ">
            <h1 className="text-4xl font-semibold text-zinc-800 dark:text-zinc-200">
              Where should we begin?
            </h1>
          </div>
        ) : (
          messages.map((msg) => <MessageBubble key={msg.id} message={msg} />)
        )}
        <div ref={bottomRef} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent dark:from-zinc-950 dark:via-zinc-950 pt-10 pb-6">
        <div className="flex flex-col items-center justify-center mx-auto max-w-3xl px-4">
          <ChatInput />
          <p className="text-center text-xs text-muted-foreground mt-3">
            ChatGPT can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};
