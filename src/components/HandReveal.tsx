import { motion } from "motion/react";
import Soli from "@/src/resource/soli.webp";

interface HandRevealProps {
  isVisible: boolean;
}

export default function HandReveal({ isVisible }: HandRevealProps) {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {isVisible && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 35, 
            damping: 20,
            mass: 1.8
          }}
          className="relative flex flex-col items-center w-[80vw] max-w-4xl"
        >
          {/* The Presentation Assembly */}
          <div className="relative h-[48.75vh] aspect-[3/5]">
            
            {/* The 3:5 Card with Flip Animation */}
            <motion.div
              initial={{ scale: 1.045, opacity: 0, rotateY: 0 }}
              animate={{ 
                scale: 1.1, 
                opacity: 1,
                rotateY: [0, 0, 180] 
              }}
              transition={{ 
                scale: { delay: 0.8, duration: 1 },
                opacity: { delay: 0.8, duration: 1 },
                rotateY: { delay: 6.5, duration: 1.2, ease: "easeInOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="w-full h-full relative z-10"
            >
              {/* Front Side */}
              <div 
                className="absolute inset-0 bg-white p-4 md:p-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-gray-100 rounded-sm flex flex-col backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full flex-1 overflow-hidden relative rounded-sm flex items-center justify-center">
                  {/* Happy Fool's Day Text - Dark Gold Tone */}
                  <h2 className="text-5xl md:text-6xl font-lobster text-[#B8860B] text-center leading-tight tracking-normal">
                    Happy<br/>Fool's<br/>Day
                  </h2>
                </div>
                {/* Card Decoration */}
                <div className="mt-4 h-2 bg-gray-100 rounded-full w-3/4 mx-auto" />
              </div>

              {/* Back Side - Blank for Photo */}
              <div
                  className="absolute inset-0 bg-white p-4 md:p-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-gray-100 rounded-sm flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
              >
                {/* Blank space for user's photo */}
                <img src={Soli} alt="Soli"/>
              </div>
            </motion.div>

            {/* Left Hand & Arm (No-Face Style: Simple, Spindly, Black) */}
            <motion.div 
              className="absolute -top-12 left-[10%] z-20 flex flex-col items-center"
              animate={{ y: [0, 0, -1000] }}
              transition={{ delay: 3.5, duration: 1.5, times: [0, 0.7, 1] }}
            >
              {/* Spindly Arm */}
              <div className="w-[29px] h-[100vh] bg-black absolute bottom-[90%] rounded-t-full shadow-2xl" />
              {/* Simple Rounded Hand (No Fingers) - Decreased length by 10% (80px -> 72px) */}
              <div className="w-[58px] h-[72px] bg-black rounded-[45%_45%_35%_35%] shadow-xl relative z-10" />
            </motion.div>

            {/* Right Hand & Arm */}
            <motion.div 
              className="absolute -top-12 right-[10%] z-20 flex flex-col items-center"
              animate={{ y: [0, 0, -1000] }}
              transition={{ delay: 3.5, duration: 1.5, times: [0, 0.7, 1] }}
            >
              {/* Spindly Arm */}
              <div className="w-[29px] h-[100vh] bg-black absolute bottom-[90%] rounded-t-full shadow-2xl" />
              {/* Simple Rounded Hand (No Fingers) - Decreased length by 10% (80px -> 72px) */}
              <div className="w-[58px] h-[72px] bg-black rounded-[45%_45%_35%_35%] shadow-xl relative z-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
