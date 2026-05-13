"use client"

import { motion } from "framer-motion"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  duration?: number
  yOffset?: number
  delay?: number
}

export function FloatingElement({ 
  children, 
  className = "", 
  duration = 4,
  yOffset = 15,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}
