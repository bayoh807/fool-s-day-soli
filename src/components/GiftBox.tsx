import { motion } from "motion/react";
import { Gift } from "lucide-react";
import JokerPopup from "./JokerPopup";

interface GiftBoxProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function GiftBox({ isOpen, onClick }: GiftBoxProps) {
  return (
    <div className="relative flex items-center justify-center py-20">
      <motion.div
        className="relative cursor-pointer group"
        onClick={onClick}
        animate={isOpen ? { y: 160 } : { y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ perspective: "1000px" }}
      >
        {/* Box Body Container */}
        <div className="relative">
          {/* Box Back/Interior */}
          <div className="w-[147px] h-[147px] bg-pink-700 rounded-b-lg shadow-inner relative border-t-4 border-pink-800 z-0">
            <div className="absolute inset-0 bg-black/40 rounded-b-lg" />
          </div>

          {/* The Surprise (Sandwiched) */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <JokerPopup isVisible={isOpen} onClose={onClick} />
          </div>

          {/* Box Front Face */}
          <div className="absolute inset-0 w-[147px] h-[147px] bg-pink-400 rounded-b-lg border-t-4 border-pink-300 z-20 pointer-events-none">
            {/* Ribbon Vertical */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-full bg-white shadow-inner" />
            {/* Ribbon Horizontal */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-7 bg-white shadow-inner" />
            
            {/* Sparkles or patterns */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-6 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-75" />
          </div>
        </div>

        {/* Box Lid (Descends with box, then flies) */}
        <motion.div
          className="absolute -top-[11px] left-0 w-full h-[37px] bg-pink-500 rounded-t-lg z-30 shadow-lg border-b-4 border-pink-600"
          animate={isOpen 
            ? { 
                y: [0, 0, -250], 
                x: [0, 0, 120], 
                rotate: [0, 0, 85], 
                opacity: [1, 1, 0], 
                scale: [1, 1, 0.5] 
              } 
            : { y: 0, x: 0, rotate: 0, opacity: 1, scale: 1 }
          }
          transition={{ 
            duration: 1.2,
            times: [0, 0.5, 1], // 0-0.5 is the descent phase (0.6s), 0.5-1 is the opening phase
            ease: "easeInOut"
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3 bg-white" />
          {/* Lid Bow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-6 bg-white rounded-full shadow-md" />
        </motion.div>

        {!isOpen && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-40"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Gift className="text-pink-200 w-[74px] h-[74px]" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}




