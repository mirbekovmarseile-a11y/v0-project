"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function GridPulse() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", updateDimensions)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  const gridSize = 60
  const cols = Math.ceil(dimensions.width / gridSize) + 1
  const rows = Math.ceil(dimensions.height / gridSize) + 1

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {/* Grid lines */}
      <svg className="w-full h-full absolute inset-0">
        {/* Vertical lines */}
        {Array.from({ length: cols }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * gridSize}
            y1={0}
            x2={i * gridSize}
            y2="100%"
            stroke="rgba(255, 107, 26, 0.05)"
            strokeWidth="1"
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: rows }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1={0}
            y1={i * gridSize}
            x2="100%"
            y2={i * gridSize}
            stroke="rgba(255, 107, 26, 0.05)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Grid intersection points with pulse */}
      {Array.from({ length: cols }).map((_, col) =>
        Array.from({ length: rows }).map((_, row) => (
          <GridPoint
            key={`${col}-${row}`}
            x={col * gridSize}
            y={row * gridSize}
            mouseX={springX}
            mouseY={springY}
          />
        ))
      )}

      {/* Radial glow following mouse */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          x: useTransform(springX, (v) => v - 200),
          y: useTransform(springY, (v) => v - 200),
          background: "radial-gradient(circle, rgba(255, 107, 26, 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}

function GridPoint({ 
  x, 
  y, 
  mouseX, 
  mouseY 
}: { 
  x: number
  y: number
  mouseX: ReturnType<typeof useSpring>
  mouseY: ReturnType<typeof useSpring>
}) {
  const distance = useTransform(
    [mouseX, mouseY],
    ([mx, my]: number[]) => {
      const dx = x - mx
      const dy = y - my
      return Math.sqrt(dx * dx + dy * dy)
    }
  )

  const scale = useTransform(distance, [0, 150], [2, 0.5])
  const opacity = useTransform(distance, [0, 150], [0.8, 0.1])

  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-orange"
      style={{
        left: x - 3,
        top: y - 3,
        scale,
        opacity,
      }}
    />
  )
}
