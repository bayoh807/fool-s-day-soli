import { motion, AnimatePresence } from "motion/react";

interface JokerPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function JokerPopup({ isVisible, onClose }: JokerPopupProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
          {/* The Jack-in-the-Box Assembly */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -180, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 1.2 }}
            className="relative flex flex-col items-center"
          >
            {/* No-Face Character */}
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              {/* No-Face Body (Elegant Cloak) */}
              <div className="w-36 h-56 bg-black rounded-t-[60px_100px] relative shadow-2xl flex flex-col items-center pt-8 border-x-2 border-gray-900">
                {/* Mask */}
                <div className="w-24 h-36 bg-white rounded-[50%_50%_48%_48%] flex flex-col items-center justify-center relative shadow-inner border border-gray-200">
                  {/* Eyes */}
                  <div className="flex gap-10 mt-2">
                    <div className="w-5 h-1.5 bg-black rounded-full" />
                    <div className="w-5 h-1.5 bg-black rounded-full" />
                  </div>
                  
                  {/* Purple Markings */}
                  <div className="absolute top-6 left-5 w-3 h-8 bg-purple-400/40 rounded-full blur-[1px]" />
                  <div className="absolute top-6 right-5 w-3 h-8 bg-purple-400/40 rounded-full blur-[1px]" />
                  <div className="absolute bottom-12 left-5 w-3 h-10 bg-purple-400/40 rounded-full blur-[1px]" />
                  <div className="absolute bottom-12 right-5 w-3 h-10 bg-purple-400/40 rounded-full blur-[1px]" />
                  
                  {/* Mouth */}
                  <div className="w-8 h-1 bg-gray-100 rounded-full mt-12" />
                </div>

                {/* Subtle Cloak Folds */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-black/40 rounded-t-[60px_100px] pointer-events-none" />
              </div>

              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute -top-12 -right-24 bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-slate-100 pointer-events-auto cursor-pointer group"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
              >
                <p className="font-bold text-gray-800 text-lg italic group-hover:scale-110 transition-transform leading-tight text-center">
                  "あ…あの…<br />ちょっと待って"
                </p>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-r-[15px] border-r-white border-b-[10px] border-b-transparent" />
              </motion.div>
            </motion.div>

            {/* The Spring (Connected to bottom of cloak) */}
            <div className="w-16 h-48 -mt-2 relative">
              <svg width="64" height="100%" viewBox="0 0 64 192" preserveAspectRatio="none" className="text-slate-200">
                <motion.path
                  d="M 32 192 
                     C 0 182, 0 172, 32 162 
                     C 64 152, 64 142, 32 132 
                     C 0 122, 0 112, 32 102 
                     C 64 92, 64 82, 32 72 
                     C 0 62, 0 52, 32 42 
                     C 64 32, 64 22, 32 12 
                     C 0 2, 0 -8, 32 -18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  animate={{ 
                    d: [
                      "M 32 192 C 0 182, 0 172, 32 162 C 64 152, 64 142, 32 132 C 0 122, 0 112, 32 102 C 64 92, 64 82, 32 72 C 0 62, 0 52, 32 42 C 64 32, 64 22, 32 12 C 0 2, 0 -8, 32 -18",
                      "M 32 192 C 10 184, 10 170, 32 162 C 54 154, 54 140, 32 132 C 10 124, 10 110, 32 102 C 54 94, 54 80, 32 72 C 10 64, 10 50, 32 42 C 54 34, 54 20, 32 12 C 10 4, 10 -10, 32 -18"
                    ]
                  }}
                  transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
