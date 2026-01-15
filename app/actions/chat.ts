"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export const sendMessage = async (input: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!input.trim() || !user) return;

  const { error } = await supabase
    .from("messages")
    .insert([{ content: input, role: "user", user_id: user.id }]);

  revalidatePath("/chat");

  console.log({ error });
};
