"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bebas text-5xl tracking-[4px] mb-12"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              TARGET
            </motion.span>
            <motion.span 
              className="text-orange"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              .PRO
            </motion.span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-orange"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
            className="text-text-dim text-xs mt-4 font-mono"
          >
            {Math.floor(Math.min(progress, 100))}%
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,107,26,0.1) 0%, transparent 70%)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
