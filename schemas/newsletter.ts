import * as z from "zod";

export const NewsLetterSchema = z.object({
  email: z.string().email({ message: "Vnesite veljaven e-naslov." }),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Za nadaljevanje morate sprejeti pogoje uporabe.",
    }),
  }),
});
