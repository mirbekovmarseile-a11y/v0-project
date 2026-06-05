"use client"

import { motion } from "framer-motion"
import { FadeIn } from "./animations"
import { TiltCard } from "./effects/magnetic"
import { LeadForm } from "./lead-form"
import { useState } from "react"

export function CTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 relative" id="contact">
      <div className="max-w-[1320px] mx-auto px-8">
        <FadeIn>
          <TiltCard>
            <motion.div 
              className="bg-gradient-to-br from-bg-elevated to-bg-card border border-border-strong rounded-[32px] p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ borderColor: "rgba(255, 107, 26, 0.2)" }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--orange-glow),transparent_60%)] pointer-events-none"
                animate={{
                  scale: isHovered ? 1.2 : 1,
                  opacity: isHovered ? 0.8 : 0.5
                }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-orange/30 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <FadeIn delay={0.1}>
                  <h2 className="font-bebas text-[clamp(40px,5vw,64px)] leading-none tracking-[-1px] mb-5">
                    Готовы <span className="text-orange italic">увеличить</span>
                    <br />продажи?
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-text-dim text-base mb-8">
                    Оставьте заявку - проведу бесплатный аудит вашей текущей рекламы и расскажу, как увеличить результат минимум на 30%.
                  </p>
                </FadeIn>
                
                <FadeIn delay={0.3}>
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="flex items-center gap-2 text-sm text-text-dim"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                      Отвечаю в течение 2 часов
                    </motion.div>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.3} direction="left">
                <LeadForm source="cta" submitLabel="Получить бесплатный аудит" />
              </FadeIn>
            </motion.div>
          </TiltCard>
        </FadeIn>
      </div>
    </section>
  )
}
