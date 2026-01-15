import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  return (
    <div
      className={cn(
        "max-w-[80%] p-2 rounded-2xl",
        message.role === "user"
          ? "self-end bg-zinc-100 dark:bg-[#303030] text-zinc-900 dark:text-white"
          : "self-start text-zinc-800 dark:text-zinc-200"
      )}
    >
      <div className="text-base leading-relaxed h-auto overflow-y-auto break-words p-2 rounded-md">
        {message.content}
      </div>
    </div>
  );
};
