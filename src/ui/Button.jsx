import React from "react";
import clsx from "clsx";

// Define button styles using built-in Tailwind classes
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  default: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
  destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-500",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  link: "text-indigo-600 underline hover:text-indigo-800 focus:ring-indigo-400",
};

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 text-sm",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10 p-2",
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        "[&_svg]:shrink-0 [&_svg]:h-4 [&_svg]:w-4",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
