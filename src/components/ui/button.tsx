import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  text,
  icon,
  iconPosition = "left",
  onClick,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        px-[8px]
        py-[16px]
        text-sm
        font-medium
        transition-all
        duration-300
        bg-black
        text-white
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className,
      )}
    >
      {icon && iconPosition === "left" && icon}

      {text && <span>{text}</span>}

      {icon && iconPosition === "right" && icon}
    </button>
  );
}
