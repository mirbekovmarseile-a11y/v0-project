"use client"

import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { FadeIn, AnimatedCounter } from "./animations"
import { MagneticButton, TiltCard } from "./effects/magnetic"
import { FloatingElement } from "./effects/floating"
import { Typewriter } from "./effects/typewriter"
import { LeadForm } from "./lead-form"

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(titleRef, { once: true })

  
  // Scroll-based animations for robot
  const { scrollY } = useScroll()
  
  // Transform values based on scroll
  const robotY = useTransform(scrollY, [0, 800], [0, 150])
  const robotRotate = useTransform(scrollY, [0, 800], [0, 15])
  const robotScale = useTransform(scrollY, [0, 400], [1, 1.1])
  const robotOpacity = useTransform(scrollY, [0, 600], [0.5, 0.15])
  const glowIntensity = useTransform(scrollY, [0, 400], [0.15, 0.4])
  
  // Smooth spring animations
  const smoothY = useSpring(robotY, { stiffness: 50, damping: 20 })
  const smoothRotate = useSpring(robotRotate, { stiffness: 50, damping: 20 })
  const smoothScale = useSpring(robotScale, { stiffness: 50, damping: 20 })

  return (
    <section ref={sectionRef} className="pt-[140px] pb-20 relative overflow-hidden">
      {/* Robot background image with scroll animations - hidden on mobile to keep text readable */}
      <motion.div 
        className="hidden lg:block absolute top-0 right-0 w-[60%] h-full pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          y: smoothY,
          rotate: smoothRotate,
          scale: smoothScale,
          opacity: robotOpacity,
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/images/laptop-marketing.jpg')",
            maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)"
          }}
        />
        {/* Static glow effect - no animation for performance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,26,0.25),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-bg/50 to-bg" />
      </motion.div>
      
      {/* Dynamic glow that intensifies on scroll */}
      <motion.div 
        className="absolute top-0 right-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top right, rgba(255, 107, 26, var(--glow)), transparent 60%)`,
        }}
      >
        <motion.div 
          className="w-full h-full"
          style={{ 
            opacity: glowIntensity,
            background: "radial-gradient(ellipse at top right, rgba(255, 107, 26, 0.3), transparent 60%)" 
          }}
        />
      </motion.div>
      

      
      {/* Background gradient overlay */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,26,0.15),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-border-strong rounded-full text-[13px] text-text-dim mb-8">
                <span className="w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_12px_#4ade80] animate-pulse" />
                Свободны для 3 проектов в этом месяце
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 
                ref={titleRef}
                className="font-bebas text-[clamp(42px,5.2vw,82px)] leading-[0.98] tracking-[-1px] mb-8"
              >
                {isInView ? (
                  <>
                    <Typewriter text="Превращаем рекламу" speed={70} delay={300} />
                    <br />
                    <Typewriter text="в стабильный поток" speed={70} delay={1400} />
                    <br />
                    <span className="text-orange italic">
                      <Typewriter text="клиентов" speed={70} delay={2700} />
                    </span>
                  </>
                ) : (
                  <>
                    Превращаем рекламу
                    <br />в стабильный поток
                    <br /><span className="text-orange italic">клиентов</span>
                  </>
                )}
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-[17px] text-text-dim max-w-[480px] mb-10">
                MARSEL — агентство, которое выстраивает систему продаж через рекламу, контент и запуски. Не разовые настройки — а долгосрочный рост вашего бизнеса. Работаем с проектами в любой нише.
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
                    <span className="relative z-10">Получить план роста бесплатно</span>
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
                      <AnimatedCounter value="+12%" duration={2} />
                    </div>
                    <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                      Рост оборота Beauty Lab
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
                      <AnimatedCounter value="500К" duration={2.2} />
                    </div>
                    <div className="text-[13px] text-text-dim uppercase tracking-[1px]">
                      Доход выпускников (сом/мес)
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
                    <h3 className="text-base mb-1">Начнём с разбора</h3>
                    <p className="text-[13px] text-text-dim mb-4">
                      Расскажу о вашем проекте за 15 минут
                    </p>
                    <LeadForm source="hero" variant="compact" submitLabel="Получить аудит" withMessage={false} />
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
