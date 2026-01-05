// components/ui/Button.tsx
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export function Button({ children, variant = "outline" }: ButtonProps) {
  return (
    <button
      className={`
        w-33.25 h-12 rounded-[999px]
        text-body-1
        ${
          variant === "primary"
            ? "bg-brown-600-custom text-white"
            : "border border-black text-headline-1"
        }
      `}
    >
      {children}
    </button>
  );
}
