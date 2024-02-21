import { createContext } from "react";
import { ZodErrorMap } from "zod";

export const ZodErrorMapContext = createContext<ZodErrorMap | null>(null);