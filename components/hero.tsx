"use client"

import { motion } from "framer-motion"
import { FadeIn, AnimatedCounter } from "./animations"

export function Hero() {
  return (
    <section className="pt-[140px] pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,26,0.25),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-border-strong rounded-full text-[13px] text-text-dim mb-8">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_12px_#4ade80] animate-pulse-glow" />
                Принимаем 3 проекта в этом месяце
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="font-[var(--font-bebas)] text-[clamp(56px,7vw,104px)] leading-[0.95] tracking-[-1px] mb-8">
                Привожу <span className="text-orange italic">клиентов</span>
                <br />из Instagram
                <br />и Facebook
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[17px] text-text-dim max-w-[480px] mb-10">
                Настраиваю таргетированную рекламу в Meta так, чтобы каждый вложенный рубль возвращался с прибылью. Без слива бюджета — только заявки и продажи.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-4 flex-wrap">
                <motion.a
                  href="#contact"
                  className="bg-orange text-black px-8 py-4 rounded-full font-semibold text-[15px] inline-flex items-center gap-2 transition-all duration-300"
                  whileHover={{ 
                    y: -2, 
                    boxShadow: "0 12px 32px rgba(255, 107, 26, 0.3)",
                    backgroundColor: "#ff8533"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Получить аудит бесплатно
                  <span>→</span>
                </motion.a>
                <motion.a
                  href="#cases"
                  className="bg-transparent text-text px-8 py-4 rounded-full font-semibold text-[15px] border border-border-strong transition-all duration-300 hover:border-orange hover:text-orange"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Смотреть кейсы
                </motion.a>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-4">
            <FadeIn delay={0.4} direction="left">
              <motion.div 
                className="bg-bg-elevated/60 backdrop-blur-xl border border-border-strong rounded-3xl p-7 relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: "rgba(255, 107, 26, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,var(--orange-glow),transparent)]" />
                <div className="font-[var(--font-bebas)] text-[64px] leading-none tracking-[-1px] mb-2">
                  <AnimatedCounter value="400+" duration={2} />
                </div>
                <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                  Запущенных кампаний
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.5} direction="left">
              <motion.div 
                className="bg-bg-elevated/60 backdrop-blur-xl border border-border-strong rounded-3xl p-7 relative overflow-hidden"
                whileHover={{ scale: 1.02, borderColor: "rgba(255, 107, 26, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,var(--orange-glow),transparent)]" />
                <div className="font-[var(--font-bebas)] text-[64px] leading-none tracking-[-1px] mb-2">
                  <AnimatedCounter value="230%" duration={2.2} />
                </div>
                <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                  Средний ROI клиентов
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.6} direction="left">
              <motion.div 
                className="bg-gradient-to-br from-bg-elevated to-bg-card border border-border-strong rounded-3xl p-7"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base mb-1">Связаться напрямую</h3>
                <p className="text-[13px] text-text-dim mb-4">
                  Расскажу о вашем проекте за 15 минут
                </p>
                <div className="flex bg-black/40 border border-border rounded-full p-1">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="flex-1 bg-transparent border-none text-text px-4 py-2.5 outline-none text-sm placeholder:text-text-muted"
                  />
                  <motion.button 
                    className="bg-orange text-black px-5 py-2 rounded-full font-semibold text-[13px]"
                    whileHover={{ backgroundColor: "#ff8533" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Отправить
                  </motion.button>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
