"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function GlitchOverlay() {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }

    // Random glitch every 5-15 seconds
    const scheduleGlitch = () => {
      const delay = 5000 + Math.random() * 10000
      setTimeout(() => {
        triggerGlitch()
        scheduleGlitch()
      }, delay)
    }

    scheduleGlitch()
  }, [])

  return (
    <AnimatePresence>
      {isGlitching && (
        <>
          {/* Horizontal scan lines */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.05 }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-[2px] bg-orange/30"
                style={{ top: `${20 + i * 15}%` }}
                initial={{ scaleX: 0, x: "-100%" }}
                animate={{ 
                  scaleX: [0, 1, 1, 0],
                  x: ["-100%", "0%", "0%", "100%"],
                }}
                transition={{ 
                  duration: 0.15,
                  delay: i * 0.02,
                }}
              />
            ))}
          </motion.div>

          {/* RGB shift effect */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
            style={{
              background: "linear-gradient(90deg, rgba(255,0,0,0.03) 0%, rgba(0,255,0,0.03) 50%, rgba(0,0,255,0.03) 100%)",
            }}
            initial={{ opacity: 0, x: -5 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              x: [-5, 5, -5],
            }}
            transition={{ duration: 0.15 }}
          />

          {/* Noise texture */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-50 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 0.1 }}
          />

          {/* Block displacement */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`block-${i}`}
              className="fixed pointer-events-none z-40 bg-bg"
              style={{
                width: `${30 + Math.random() * 40}%`,
                height: `${2 + Math.random() * 5}%`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                x: [-20, 20, -20],
              }}
              transition={{ duration: 0.1, delay: i * 0.03 }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  )
}

// Glitch text effect for headings
export function GlitchText({ children, className = "" }: { children: string, className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{children}</span>
      
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.span
              className="absolute inset-0 text-red-500/50"
              initial={{ x: 0 }}
              animate={{ x: [-2, 2, -2] }}
              exit={{ x: 0 }}
              transition={{ duration: 0.1, repeat: Infinity }}
              aria-hidden
            >
              {children}
            </motion.span>
            <motion.span
              className="absolute inset-0 text-cyan-500/50"
              initial={{ x: 0 }}
              animate={{ x: [2, -2, 2] }}
              exit={{ x: 0 }}
              transition={{ duration: 0.1, repeat: Infinity }}
              aria-hidden
            >
              {children}
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </span>
  )
}
