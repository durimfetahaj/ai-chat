"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export const sendMessage = async (input: string) => {
  if (!input.trim()) return;
  const supabase = await createClient();

  const { error } = await supabase
    .from("messages")
    .insert([{ content: input, role: "assistant" }]);

  revalidatePath("/chat");

  console.log({ error });
};
