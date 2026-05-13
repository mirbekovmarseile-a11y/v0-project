"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MagneticButton } from "./effects/magnetic"

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Процесс", href: "#services" },
  { label: "Контакты", href: "#contact" }
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
        scrolled 
          ? "bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="font-bebas text-2xl tracking-[2px] relative group">
              TARGET<span className="text-orange">.PRO</span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-[2px] bg-orange"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          
          <ul className="hidden md:flex gap-1 list-none bg-white/[0.03] rounded-full p-1.5 backdrop-blur-sm border border-white/[0.05]">
            {navItems.map((item, i) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                <Link 
                  href={item.href}
                  className="text-text-dim text-sm px-5 py-2 block relative z-10 transition-colors duration-200 hover:text-text"
                >
                  {item.label}
                </Link>
                {hoveredIndex === i && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MagneticButton strength={0.15}>
              <motion.a 
                href="#contact"
                className="bg-orange text-black px-6 py-3 rounded-full font-semibold text-sm inline-block relative overflow-hidden group"
                whileHover={{ 
                  boxShadow: "0 0 30px rgba(255, 107, 26, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Получить аудит</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-orange"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
