
import paw from "../assets/paw.gif";
import badge from "../assets/BestofLuck.png";

export default function GoodLuckBadge() {
  return (
    <div
      className="
        absolute
        top-[580px]    
        left-[-50px]   
      "
    >
      {/* GoodLuck Badge */}
      <img
        src={badge}
        alt="Best of Luck Badge"
        className="
          w-[196.51px]
          h-[96.06px]
          
        "
      />

      {/* Paw GIF */}
      <img
        src={paw}
        alt="paw"
        className="
          absolute
          top-[130px]      
          left-[-90px]    
          w-[173.55px]
          h-[173.55px]
          z-10         
        "
      />
    </div>
  );
}
