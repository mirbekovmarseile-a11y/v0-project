"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function TextReveal({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 0.03 
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + wordIndex * staggerDelay * 3,
              ease: [0.25, 0.4, 0.25, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  highlightWords?: string[]
  highlightClass?: string
}

export function SplitText({ 
  text, 
  className = "", 
  delay = 0,
  highlightWords = [],
  highlightClass = "text-orange"
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => {
        const isHighlighted = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        )
        
        return (
          <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
            <motion.span
              className={`inline-block ${isHighlighted ? highlightClass : ""}`}
              initial={{ y: "100%", rotateX: 90 }}
              animate={isInView ? { y: 0, rotateX: 0 } : { y: "100%", rotateX: 90 }}
              transition={{
                duration: 0.6,
                delay: delay + wordIndex * 0.05,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              {word}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 text-orange opacity-0"
        variants={{
          hover: {
            opacity: [0, 1, 0, 1, 0],
            x: [-2, 2, -2, 2, 0],
            transition: { duration: 0.3 }
          }
        }}
        aria-hidden
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-cyan-400 opacity-0"
        variants={{
          hover: {
            opacity: [0, 1, 0, 1, 0],
            x: [2, -2, 2, -2, 0],
            transition: { duration: 0.3 }
          }
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </motion.span>
  )
}
