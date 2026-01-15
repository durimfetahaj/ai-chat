import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { sendMessage } from "@/app/actions/chat";

export const ChatInput = () => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const send = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
      className="w-full"
    >
      <div className="flex items-center w-full px-2 py-2 rounded-[26px] border border-zinc-200 dark:border-zinc-800 dark:bg-[#303030] shadow-lg focus-within:border-zinc-400 dark:focus-within:border-zinc-600 transition-all">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
          className="m-0 w-full resize-none border-0 bg-transparent p-2 pr-2 focus:ring-0 focus-visible:ring-0 outline-none max-h-60 text-base"
          onChange={(e) => {
            setInput(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />

        <Button
          type="submit"
          className="h-8 w-8 rounded-full p-0 flex items-center justify-center shrink-0"
          disabled={!input.trim()}
        >
          <ArrowUp size={18} />
        </Button>
      </div>
    </form>
  );
};
