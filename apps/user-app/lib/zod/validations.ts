import * as z from "zod";

export const createUserForm = z.object({
  name: z.string().min(3, "Too Short ").max(15, "Enter a shorter name"),
  email: z.string().email("Enter a mail"),
  phoneNumber: z.string().min(10, "Invalid Number").max(10, "Invalid Number"),
  age: z.string(),
});
