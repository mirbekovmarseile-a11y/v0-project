"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { MagneticButton } from "./effects/magnetic"

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#cases" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-bg/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="font-bebas text-3xl tracking-[3px] relative group">
              MARSEL
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-orange"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <MagneticButton strength={0.15}>
              <motion.a
                href="#contact"
                className="bg-orange text-black px-6 py-3 rounded-full font-semibold text-sm inline-block relative overflow-hidden group"
                whileHover={{ boxShadow: "0 0 30px rgba(255, 107, 26, 0.3)" }}
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

          {/* Mobile burger button */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-text rounded-full"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-text rounded-full"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-text rounded-full"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-bg/95 backdrop-blur-xl border-t border-white/[0.06] mt-5"
          >
            <ul className="flex flex-col gap-1 list-none px-6 py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-text text-lg py-3 border-b border-white/[0.05]"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
                className="mt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-orange text-black text-center px-6 py-4 rounded-full font-semibold text-base"
                >
                  Получить аудит бесплатно
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
