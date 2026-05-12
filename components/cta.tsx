"use client"

import { motion } from "framer-motion"
import { FadeIn } from "./animations"
import { useState } from "react"

export function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  return (
    <section className="py-20" id="contact">
      <div className="max-w-[1320px] mx-auto px-8">
        <FadeIn>
          <motion.div 
            className="bg-gradient-to-br from-bg-elevated to-bg-card border border-border-strong rounded-[32px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden"
            whileHover={{ borderColor: "rgba(255, 107, 26, 0.15)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Background glow */}
            <div className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--orange-glow),transparent_60%)] pointer-events-none" />
            
            <div className="relative">
              <FadeIn delay={0.1}>
                <h2 className="font-[var(--font-bebas)] text-[clamp(40px,5vw,64px)] leading-none tracking-[-1px] mb-5">
                  Готовы <span className="text-orange italic">увеличить</span>
                  <br />продажи?
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-text-dim text-base">
                  Оставьте заявку — проведу бесплатный аудит вашей текущей рекламы и расскажу, как увеличить результат минимум на 30%.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="left">
              <form className="relative flex flex-col gap-3">
                <motion.input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/40 border border-border-strong rounded-2xl px-5 py-4 text-text text-sm outline-none transition-colors duration-300 focus:border-orange placeholder:text-text-muted"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.input
                  type="email"
                  placeholder="Email или телефон"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/40 border border-border-strong rounded-2xl px-5 py-4 text-text text-sm outline-none transition-colors duration-300 focus:border-orange placeholder:text-text-muted"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/40 border border-border-strong rounded-2xl px-5 py-4 text-text text-sm outline-none transition-colors duration-300 focus:border-orange placeholder:text-text-muted min-h-[80px] resize-y"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.button
                  type="submit"
                  className="bg-orange text-black py-4 rounded-2xl font-semibold text-[15px] transition-all duration-300"
                  whileHover={{ 
                    backgroundColor: "#ff8533",
                    y: -2 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Получить бесплатный аудит
                </motion.button>
              </form>
            </FadeIn>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
