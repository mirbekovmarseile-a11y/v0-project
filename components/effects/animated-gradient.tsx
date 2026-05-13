"use client"

import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main animated gradient blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255,107,26,0.6) 0%, rgba(255,60,0,0.3) 50%, transparent 70%)"
        }}
        animate={{
          x: ["-20%", "60%", "30%", "-20%"],
          y: ["-30%", "20%", "60%", "-30%"],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary blob */}
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[100px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(255,150,50,0.5) 0%, rgba(255,107,26,0.2) 50%, transparent 70%)"
        }}
        animate={{
          x: ["20%", "-40%", "10%", "20%"],
          y: ["30%", "-20%", "50%", "30%"],
          scale: [1, 0.8, 1.1, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute left-1/2 top-1/3 w-[300px] h-[300px] rounded-full blur-[80px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(255,200,100,0.6) 0%, transparent 70%)"
        }}
        animate={{
          x: ["-50%", "100%", "-100%", "-50%"],
          y: ["0%", "50%", "-30%", "0%"]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
