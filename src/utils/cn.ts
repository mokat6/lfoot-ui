import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"; // optional but recommended for merging conflicting Tailwind classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
