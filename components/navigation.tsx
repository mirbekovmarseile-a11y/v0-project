"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

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
          <Link href="/" className="font-[var(--font-bebas)] text-2xl tracking-[2px]">
            TARGET<span className="text-orange">.PRO</span>
          </Link>
          
          <ul className="hidden md:flex gap-9 list-none">
            {["Услуги", "Кейсы", "Процесс", "Контакты"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link 
                  href={`#${item === "Услуги" ? "services" : item === "Кейсы" ? "cases" : item === "Процесс" ? "process" : "contact"}`}
                  className="text-text-dim text-sm hover:text-text transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              href="#contact"
              className="bg-orange text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-orange-bright hover:-translate-y-0.5"
            >
              Получить аудит
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}
