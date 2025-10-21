import * as React from "react";
import { cva, type VariantProps } from "../utils/cva";

const button = cva(
  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-neutral-800 focus:ring-black",
        secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-400",
        outline: "border border-neutral-300 hover:bg-neutral-50",
        ghost: "hover:bg-neutral-100",
      }
    },
    defaultVariants: { variant: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />;
}
