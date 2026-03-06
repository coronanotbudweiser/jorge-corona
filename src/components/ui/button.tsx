import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-green-500 text-white hover:bg-brand-green-600 hover:scale-[1.02] focus-visible:ring-brand-green-500",
        cta: "bg-cta-red-500 text-white hover:bg-cta-red-600 hover:scale-[1.02] focus-visible:ring-cta-red-500 shadow-lg shadow-cta-red-500/25",
        outline:
          "border-2 border-brand-green-500 text-brand-green-600 bg-transparent hover:bg-brand-green-50 focus-visible:ring-brand-green-500",
        ghost:
          "text-brand-green-600 bg-transparent hover:text-brand-green-700 tracking-wider",
      },
      size: {
        default: "h-11 px-6 text-sm rounded-md",
        sm: "h-9 px-4 text-xs rounded-md",
        lg: "h-13 px-8 text-base rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
