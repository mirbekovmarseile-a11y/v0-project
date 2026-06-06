"use client"

import { motion } from "framer-motion"
import { TrendingDown, LayoutGrid, Rocket, Handshake, ArrowDown } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const pains = [
  {
    icon: TrendingDown,
    title: "Сливаете бюджет в рекламу",
    text: "Запускаете кампании, тратите деньги, но заявок мало или они дорогие. Не понимаете, что работает, а что — нет.",
  },
  {
    icon: LayoutGrid,
    title: "Хаотичный контент в соцсетях",
    text: "Постите когда есть время, без стратегии. Подписчики не растут, охваты падают, аудитория не покупает.",
  },
  {
    icon: Rocket,
    title: "Хотите масштабировать запуски",
    text: "Есть продукт или курс, но не понимаете, как собрать аудиторию, прогреть и продать на хороший чек.",
  },
  {
    icon: Handshake,
    title: "Работали с подрядчиками — без результата",
    text: "Платили агентствам и фрилансерам, но никто не погружался в проект. Получали отчёты ради отчётов, а не цифры.",
  },
]

export function Pains() {
  return (
    <section className="py-24 relative" id="pains">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <FadeIn>
            <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
              &mdash; Знакомо?
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px] mb-5">
              Если узнаёте здесь себя &mdash;
              <br />
              мы знаем, <span className="text-orange italic">что делать</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-dim text-base">
              Большинство клиентов приходят к нам с одной из этих ситуаций:
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {pains.map((pain) => {
            const Icon = pain.icon
            return (
              <StaggerItem key={pain.title}>
                <motion.div
                  className="bg-bg-card border border-border rounded-3xl p-8 relative overflow-hidden h-full group"
                  whileHover={{ borderColor: "var(--orange)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-orange" aria-hidden="true" />
                    </div>
                    <h3 className="font-bebas text-[28px] tracking-[-0.5px] mb-3">
                      {pain.title}
                    </h3>
                    <p className="text-text-dim text-[15px] leading-relaxed">
                      {pain.text}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <a
            href="#services"
            className="mt-12 flex flex-col items-center gap-3 text-center group"
          >
            <span className="font-bebas text-[26px] tracking-[-0.5px] text-text group-hover:text-orange transition-colors duration-300">
              Решим каждую из этих задач
            </span>
            <motion.span
              className="w-11 h-11 rounded-full border border-border-strong flex items-center justify-center text-orange group-hover:border-orange transition-colors duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-5 h-5" aria-hidden="true" />
            </motion.span>
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
