"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export function Typewriter({ text, speed = 50, delay = 0, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (currentIndex >= text.length) return

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1))
      setCurrentIndex(currentIndex + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, started])

  return (
    <span className={className}>
      {displayText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-orange">|</span>
      )}
    </span>
  )
}
