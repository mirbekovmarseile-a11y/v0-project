"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const channels = [
  {
    label: "Telegram",
    href: "https://t.me/username",
    bg: "#229ED9",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M21.94 4.49l-3.32 15.65c-.25 1.1-.9 1.38-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.16 9.4-8.49c.41-.36-.09-.56-.63-.2L5.18 13.1l-5-1.57c-1.09-.34-1.11-1.09.23-1.61l19.55-7.53c.9-.34 1.69.2 1.4 1.6z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/79000000000",
    bg: "#25D366",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.38A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
]

export function MessengerButtons() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {channels.map((channel) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Написать в ${channel.label}`}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
              style={{ backgroundColor: channel.bg }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
            >
              {channel.icon}
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
