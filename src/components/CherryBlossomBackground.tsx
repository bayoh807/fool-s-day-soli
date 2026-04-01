import { motion } from "motion/react";

const Petal = ({ delay, x, duration, size }: { delay: number; x: string; duration: number; size: number; key?: number }) => (
  <motion.div
    initial={{ y: -50, left: x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: "110vh", 
      left: [`${parseFloat(x)}%`, `${parseFloat(x) + 15}%`, `${parseFloat(x) - 10}%`],
      opacity: [0, 1, 1, 0.4, 0],
      rotate: [0, 180, 360, 540]
    }}
    transition={{ 
      duration, 
      delay, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="fixed bg-pink-200/80 rounded-[100%_10%_100%_10%] shadow-sm pointer-events-none"
    style={{ 
      width: size, 
      height: size * 1.2,
      zIndex: 5 // Behind main content (z-10) but above background image
    }}
  />
);

export default function CherryBlossomBackground() {
  const petals = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 20,
    x: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 10,
    size: 8 + Math.random() * 8
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
        style={{
          backgroundImage: 'url("https://ais-pre-2l5xkolwexce76jsfdnj6f-664953493170.asia-east1.run.app/api/image/1711950512000")',
          backgroundColor: '#fdf2f8'
        }}
      />

      {/* Soft Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 via-transparent to-pink-200/30 z-1" />

      {/* Falling Petals Layer */}
      {petals.map((petal) => (
        <Petal key={petal.id} {...petal} />
      ))}

      {/* Ground Petals (Static/Faded) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-200/40 to-transparent z-2" />
    </div>
  );
}
