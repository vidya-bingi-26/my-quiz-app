import { useEffect, useState } from "react";
import GradientButton from "../components/GradientButton";

export default function ResultPage() {
  const [animate, setAnimate] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);

    
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current <= 62) setScore(current);
      else clearInterval(interval);
    }, 62);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        w-[1920px] h-[1080px]
        bg-[#F4FDFF]
        flex flex-col items-center
        overflow-hidden
        relative
      "
    >
      <div
        className={`
          mt-[140px]
          transition-all duration-[1000ms] ease-out
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        
        <div
          className="
            w-[239px] h-[45px]
            rounded-[8px]
            bg-white
            absolute
            top-[117px]
            left-[880px]
            px-10px
            py-31px
            mb-[10px]
            
          "
        >
          <span
            className="
              text-[20px] font-[500] font-[Manrope]
              tracking-[-0.31px]
              text-[#15313D]
            "
          >
            Keep Learning!
          </span>
        </div>

        {/* Title */}
        <div className="w-full flex justify-center mb-[40px]">
          <span
            className="
              font-[DM_Serif_Display] italic
              text-[60px] tracking-[-4px]
              bg-gradient-to-r from-[#15313D] to-[#3CABDA]
              bg-clip-text text-transparent
            "
          >
            Your Final score is
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center justify-center gap-[12px] mb-[60px]">
          <span
            className="
              font-[DM_Serif_Display]
              text-[214px]
              leading-[100%]
              text-[#266580]
            "
          >
            {score}
          </span>

          <span
            className="
              font-[DM_Serif_Display] italic
              text-[60px] tracking-[-4px]
              bg-gradient-to-r from-[#15313D] to-[#3CABDA]
              bg-clip-text text-transparent
              relative top-[25px]
            "
          >
            %
          </span>
        </div>

        {/* ✅ Start Again Button */}
        <div className="flex justify-center mt-[20px]">
          <GradientButton
            text="Start Again"
            onClick={() => (window.location.href = "/")} // redirect to start page
          />
        </div>
      </div>
    </div>
  );
}
