"use client"

import { motion } from "framer-motion"

export function DataFlow() {
  const lines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 2,
    angle: Math.random() * 60 - 30,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 107, 26, 0)" />
            <stop offset="50%" stopColor="rgba(255, 107, 26, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 107, 26, 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {lines.map((line) => (
          <g key={line.id}>
            {/* Static line path */}
            <line
              x1={`${line.startX}%`}
              y1={`${line.startY}%`}
              x2={`${line.startX + 40}%`}
              y2={`${line.startY + line.angle}%`}
              stroke="rgba(255, 107, 26, 0.1)"
              strokeWidth="1"
            />
            
            {/* Animated data packet */}
            <motion.circle
              r="3"
              fill="url(#dataGradient)"
              filter="url(#glow)"
              initial={{
                cx: `${line.startX}%`,
                cy: `${line.startY}%`,
                opacity: 0,
              }}
              animate={{
                cx: [`${line.startX}%`, `${line.startX + 40}%`],
                cy: [`${line.startY}%`, `${line.startY + line.angle}%`],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Trail effect */}
            <motion.line
              stroke="url(#dataGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{
                x1: `${line.startX}%`,
                y1: `${line.startY}%`,
                x2: `${line.startX}%`,
                y2: `${line.startY}%`,
                opacity: 0,
              }}
              animate={{
                x1: [`${line.startX}%`, `${line.startX + 35}%`, `${line.startX + 40}%`],
                y1: [`${line.startY}%`, `${line.startY + line.angle * 0.875}%`, `${line.startY + line.angle}%`],
                x2: [`${line.startX}%`, `${line.startX + 5}%`, `${line.startX + 40}%`],
                y2: [`${line.startY}%`, `${line.startY + line.angle * 0.125}%`, `${line.startY + line.angle}%`],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
