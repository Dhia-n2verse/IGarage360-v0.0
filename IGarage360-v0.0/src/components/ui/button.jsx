import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const buttonVariants = {
  default: "bg-black text-white hover:bg-gray-800",
  outline: "border border-gray-300 text-black hover:bg-gray-100",
  ghost: "text-black hover:bg-gray-100",
  link: "text-blue-600 underline-offset-4 hover:underline",
}

export const Button = forwardRef(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-3 text-base",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
