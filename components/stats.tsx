"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeIn, AnimatedCounter, StaggerContainer, StaggerItem } from "./animations"
import { TiltCard } from "./effects/magnetic"
import { TextReveal } from "./effects/text-reveal"

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const stats = [
    { value: "86+", label: "Проектов запущено" },
    { value: "98%", label: "Клиентов продлевают сотрудничество" },
    { value: "223М", label: "Рублей оборота клиентов" },
  ]

  return (
    <section className="py-20" ref={ref}>
      <div className="max-w-[1320px] mx-auto px-8">
        <FadeIn>
          <TiltCard>
            <motion.div 
              className="bg-bg-card rounded-[32px] p-12 md:p-20 relative overflow-hidden border border-border"
              whileHover={{ borderColor: "rgba(255, 107, 26, 0.2)" }}
              transition={{ duration: 0.4 }}
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(255,107,26,0.4) 0%, transparent 70%)"
                }}
                animate={isInView ? {
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                } : {}}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 mb-16 md:mb-20 items-start">
                <FadeIn delay={0.1}>
                  <motion.div 
                    className="w-14 h-14 border border-border-strong rounded-full flex items-center justify-center text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ⌖
                    </motion.span>
                  </motion.div>
                </FadeIn>
                <div>
                  <h2 className="font-bebas text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.5px]">
                    <TextReveal text="Помогаю бизнесу" delay={0.2} />
                    {" "}
                    <span className="text-orange italic">
                      <TextReveal text="расти" delay={0.4} />
                    </span>
                    {" "}
                    <TextReveal text="через системный подход" delay={0.5} />
                    {" "}
                    <span className="text-orange italic">
                      <TextReveal text="к таргету" delay={0.8} />
                    </span>
                    {" "}
                    <TextReveal text="в Meta Ads" delay={0.9} />
                  </h2>
                </div>
              </div>

              <StaggerContainer 
                className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-border"
                staggerDelay={0.15}
              >
                {stats.map((stat, index) => (
                  <StaggerItem key={stat.label}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className="font-bebas text-[clamp(72px,8vw,120px)] leading-none tracking-[-2px] mb-3"
                        whileHover={{ color: "var(--orange)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatedCounter value={stat.value} duration={2.5} />
                      </motion.div>
                      <div className="flex items-center gap-2.5 text-sm text-text-dim">
                        <motion.span 
                          className="w-2 h-2 bg-orange rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        />
                        {stat.label}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </TiltCard>
        </FadeIn>
      </div>
    </section>
  )
}
