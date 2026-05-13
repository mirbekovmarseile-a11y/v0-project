"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Initialize nodes
    const nodeCount = 50
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      pulsePhase: Math.random() * Math.PI * 2,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    let time = 0
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Pulse effect
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 107, 26, ${0.4 + pulse * 0.3})`
        ctx.fill()

        // Draw connections to nearby nodes
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3
            
            // Gradient line
            const gradient = ctx.createLinearGradient(
              node.x, node.y, otherNode.x, otherNode.y
            )
            gradient.addColorStop(0, `rgba(255, 107, 26, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(255, 107, 26, ${opacity * 1.5})`)
            gradient.addColorStop(1, `rgba(255, 107, 26, ${opacity})`)

            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5
            ctx.stroke()

            // Animated pulse along the line
            const pulsePos = (Math.sin(time * 3 + i * 0.1) + 1) / 2
            const pulseX = node.x + dx * pulsePos
            const pulseY = node.y + dy * pulsePos

            ctx.beginPath()
            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 107, 26, ${opacity * 2})`
            ctx.fill()
          }
        })

        // Connect to mouse if nearby
        const mouseDx = mouse.x - node.x
        const mouseDy = mouse.y - node.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDistance < 200) {
          const opacity = (1 - mouseDistance / 200) * 0.5
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(255, 107, 26, ${opacity})`
          ctx.lineWidth = 1
          ctx.stroke()

          // Attract node slightly to mouse
          node.vx += mouseDx * 0.00005
          node.vy += mouseDy * 0.00005
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}
