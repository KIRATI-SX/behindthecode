type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "outline",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`
        w-33.25 h-12 rounded-[999px]
        text-body-1
        ${
          variant === "primary"
            ? "bg-brown-600-custom hover:bg-brown-600/90 text-white"
            : "border border-black text-headline-1"
        }
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
