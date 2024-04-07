import { z } from "zod";
import { createUserForm } from "./validations";

export type CreateUser = z.infer<typeof createUserForm>;
