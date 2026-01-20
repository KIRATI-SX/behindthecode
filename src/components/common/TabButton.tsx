interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg w-max-28 h-max-12 w-28 h-12 text-body-1 transition-colors duration-200 ${
        isActive
          ? "bg-stone-700 text-white"
          : "text-brown-500 hover:bg-brown-300"
      }`}
    >
      {label}
    </button>
  );
}

export default TabButton;