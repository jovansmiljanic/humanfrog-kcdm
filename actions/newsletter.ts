"use server";

// Schema
import { NewsLetterSchema } from "@/schemas/newsletter";

// Vendors
import * as z from "zod";

export const subscribeToNewsletter = async (
  values: z.infer<typeof NewsLetterSchema>
) => {
  const validatedFields = NewsLetterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, consent } = validatedFields.data;

  console.log(email, consent);

  return { success: "Uspešno naročeni!" };
};
