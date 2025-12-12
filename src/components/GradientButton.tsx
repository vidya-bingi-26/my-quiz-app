interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  isSubmitting?: boolean;
}

export default function GradientButton({
  text,
  onClick,
  disabled = false,
  isSubmitting = false,
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={
        "rounded-[10px] flex items-center justify-center gap-[10px] " +
        "px-[32px] py-[10px] " + 
        "bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)] " +
        "border border-[#96E5FF0D] shadow-sm " +
        "transform transition-all duration-[1000ms] ease-out " +
        (isSubmitting ? "scale-[0.98] opacity-90" : "scale-100 opacity-100") +
        " " +
        
        (disabled
          ? "opacity-40 cursor-not-allowed pointer-events-none"
          : "cursor-pointer")
      }
    >
      <span className="text-[22px] leading-[24px] font-inter font-semibold text-[#15313D]">
        {text}
      </span>
    </button>
  );
}
