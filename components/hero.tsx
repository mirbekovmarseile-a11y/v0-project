"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FadeIn, AnimatedCounter } from "./animations"
import { MagneticButton, TiltCard } from "./effects/magnetic"
import { FloatingElement } from "./effects/floating"
import { Typewriter } from "./effects/typewriter"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true })

  return (
    <section className="pt-[140px] pb-20 relative overflow-hidden">
      {/* Robot background image */}
      <motion.div 
        className="absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/robot-bg.jpg')",
            maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-bg/50 to-bg" />
      </motion.div>
      
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,26,0.15),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-border-strong rounded-full text-[13px] text-text-dim mb-8">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_12px_#4ade80] animate-pulse" />
                Принимаем 3 проекта в этом месяце
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 
                ref={titleRef}
                className="font-bebas text-[clamp(56px,7vw,104px)] leading-[0.95] tracking-[-1px] mb-8"
              >
                {isInView ? (
                  <>
                    <Typewriter text="Привожу " speed={80} delay={300} />
                    <span className="text-orange italic">
                      <Typewriter text="клиентов" speed={80} delay={1000} />
                    </span>
                    <br />
                    <Typewriter text="из Instagram" speed={80} delay={1800} />
                    <br />
                    <Typewriter text="и Facebook" speed={80} delay={2800} />
                  </>
                ) : (
                  <>
                    Привожу <span className="text-orange italic">клиентов</span>
                    <br />из Instagram
                    <br />и Facebook
                  </>
                )}
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[17px] text-text-dim max-w-[480px] mb-10">
                Настраиваю таргетированную рекламу в Meta так, чтобы каждый вложенный рубль возвращался с прибылью. Без слива бюджета — только заявки и продажи.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex gap-4 flex-wrap">
                <MagneticButton strength={0.2}>
                  <motion.a
                    href="#contact"
                    className="bg-orange text-black px-8 py-4 rounded-full font-semibold text-[15px] inline-flex items-center gap-2 transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ 
                      boxShadow: "0 0 40px rgba(255, 107, 26, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Получить аудит бесплатно</span>
                    <motion.span 
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      &rarr;
                    </motion.span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#ff8533] to-orange"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </MagneticButton>
                <MagneticButton strength={0.15}>
                  <motion.a
                    href="#cases"
                    className="bg-transparent text-text px-8 py-4 rounded-full font-semibold text-[15px] border border-border-strong transition-all duration-300 hover:border-orange hover:text-orange"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Смотреть кейсы
                  </motion.a>
                </MagneticButton>
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-4">
            <FadeIn delay={0.4} direction="left">
              <FloatingElement duration={5} yOffset={10} delay={0}>
                <TiltCard>
                  <motion.div 
                    className="bg-bg-elevated/60 backdrop-blur-xl border border-border-strong rounded-3xl p-7 relative overflow-hidden"
                    whileHover={{ borderColor: "rgba(255, 107, 26, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,var(--orange-glow),transparent)]" />
                    <div className="font-bebas text-[64px] leading-none tracking-[-1px] mb-2">
                      <AnimatedCounter value="400+" duration={2} />
                    </div>
                    <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                      Запущенных кампаний
                    </div>
                  </motion.div>
                </TiltCard>
              </FloatingElement>
            </FadeIn>

            <FadeIn delay={0.5} direction="left">
              <FloatingElement duration={6} yOffset={12} delay={0.5}>
                <TiltCard>
                  <motion.div 
                    className="bg-bg-elevated/60 backdrop-blur-xl border border-border-strong rounded-3xl p-7 relative overflow-hidden"
                    whileHover={{ borderColor: "rgba(255, 107, 26, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[radial-gradient(circle,var(--orange-glow),transparent)]" />
                    <div className="font-bebas text-[64px] leading-none tracking-[-1px] mb-2">
                      <AnimatedCounter value="230%" duration={2.2} />
                    </div>
                    <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                      Средний ROI клиентов
                    </div>
                  </motion.div>
                </TiltCard>
              </FloatingElement>
            </FadeIn>

            <FadeIn delay={0.6} direction="left">
              <FloatingElement duration={4} yOffset={8} delay={1}>
                <TiltCard>
                  <motion.div 
                    className="bg-gradient-to-br from-bg-elevated to-bg-card border border-border-strong rounded-3xl p-7"
                    whileHover={{ borderColor: "rgba(255, 107, 26, 0.3)" }}
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
                      <MagneticButton strength={0.1}>
                        <motion.button 
                          className="bg-orange text-black px-5 py-2 rounded-full font-semibold text-[13px]"
                          whileHover={{ boxShadow: "0 0 20px rgba(255, 107, 26, 0.4)" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Отправить
                        </motion.button>
                      </MagneticButton>
                    </div>
                  </motion.div>
                </TiltCard>
              </FloatingElement>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
