"use client"

import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Single optimized gradient blob using CSS will-change for GPU acceleration */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-25 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255,107,26,0.5) 0%, rgba(255,60,0,0.2) 50%, transparent 70%)"
        }}
        animate={{
          x: ["-10%", "50%", "-10%"],
          y: ["-20%", "30%", "-20%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Secondary blob - slower animation */}
      <motion.div
        className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-[80px] opacity-15 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(255,150,50,0.4) 0%, transparent 70%)"
        }}
        animate={{
          x: ["10%", "-30%", "10%"],
          y: ["20%", "-10%", "20%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
