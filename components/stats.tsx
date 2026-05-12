"use client"

import { motion } from "framer-motion"
import { FadeIn, AnimatedCounter, StaggerContainer, StaggerItem } from "./animations"

export function Stats() {
  const stats = [
    { value: "86+", label: "Проектов запущено" },
    { value: "98%", label: "Клиентов продлевают сотрудничество" },
    { value: "223М", label: "Рублей оборота клиентов" },
  ]

  return (
    <section className="py-20">
      <div className="max-w-[1320px] mx-auto px-8">
        <FadeIn>
          <motion.div 
            className="bg-bg-card rounded-[32px] p-12 md:p-20 relative overflow-hidden border border-border"
            whileHover={{ borderColor: "rgba(255, 107, 26, 0.2)" }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 mb-16 md:mb-20 items-start">
              <FadeIn delay={0.1}>
                <div className="w-14 h-14 border border-border-strong rounded-full flex items-center justify-center text-2xl">
                  ⌖
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="font-[var(--font-bebas)] text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[-0.5px]">
                  Помогаю бизнесу <span className="text-orange italic">расти</span> через системный подход{" "}
                  <span className="text-orange italic">к таргету</span> в Meta Ads
                </h2>
              </FadeIn>
            </div>

            <StaggerContainer 
              className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-border"
              staggerDelay={0.15}
            >
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="font-[var(--font-bebas)] text-[clamp(72px,8vw,120px)] leading-none tracking-[-2px] mb-3">
                    <AnimatedCounter value={stat.value} duration={2.5} />
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-text-dim">
                    <span className="w-2 h-2 bg-orange rounded-full" />
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
