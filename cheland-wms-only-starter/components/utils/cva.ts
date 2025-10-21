import { clsx } from "clsx";

type Variants = Record<string, Record<string, string>>;
type Options = { variants?: Variants; defaultVariants?: Record<string, string> };

export function cva(base: string, options: Options = {}) {
  return function ({ className, ...rest }: Record<string, string | undefined> = {}) {
    let out = [base];
    const { variants = {}, defaultVariants = {} } = options;
    const merged = { ...defaultVariants, ...rest };
    for (const key of Object.keys(variants)) {
      const val = merged[key];
      if (val && variants[key][val]) out.push(variants[key][val]);
    }
    return clsx(out, className);
  };
}
