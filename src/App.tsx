/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import GiftBox from "./components/GiftBox";
import CherryBlossomBackground from "./components/CherryBlossomBackground";
import HandReveal from "./components/HandReveal";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHand, setShowHand] = useState(false);

  const handleBoxClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // 1.2s (popup delay) + 2.5s (wait after popup) = 3.7s
      const timer = setTimeout(() => {
        setShowHand(true);
      }, 3700);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="min-h-screen text-gray-800 font-sans selection:bg-pink-200 overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Cherry Blossom Background */}
      <CherryBlossomBackground />

      <main className="relative z-10 flex flex-col items-center gap-12 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!showHand ? (
            <motion.div 
              key="box-phase"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center py-20"
            >
              <GiftBox isOpen={isOpen} onClick={handleBoxClick} />
            </motion.div>
          ) : (
            <motion.div 
              key="hand-phase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full"
            >
              <HandReveal isVisible={true} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className="fixed bottom-8 text-[10px] uppercase tracking-[0.3em] font-mono text-pink-700/60"
        >
        </motion.footer>
      </main>
    </div>
  );
}

