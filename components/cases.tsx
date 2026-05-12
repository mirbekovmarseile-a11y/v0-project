"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "./animations"

const cases = [
  {
    niche: "E-COMMERCE",
    result: "×4.7",
    resultLabel: "ROAS за 3 месяца",
    title: "Магазин эко-косметики",
    description: "Снизили CPL с 480₽ до 127₽. Запустили динамический ремаркетинг — выручка выросла в 4.7 раза.",
    metrics: [
      { value: "127₽", label: "CPL" },
      { value: "2.8М₽", label: "оборот / мес" },
    ]
  },
  {
    niche: "УСЛУГИ",
    result: "340",
    resultLabel: "заявок за месяц",
    title: "Стоматологическая клиника",
    description: "Запустили лидогенерацию на имплантацию. CPL — 890₽ при средней цене заявки в нише 2500₽.",
    metrics: [
      { value: "890₽", label: "CPL" },
      { value: "38%", label: "конверсия в запись" },
    ]
  },
  {
    niche: "ИНФОБИЗНЕС",
    result: "×12",
    resultLabel: "окупаемость курса",
    title: "Онлайн-школа дизайна",
    description: "Воронка через лид-магнит и вебинар. Стоимость регистрации 65₽, окупаемость рекламы х12.",
    metrics: [
      { value: "65₽", label: "регистрация" },
      { value: "4.2К", label: "учеников" },
    ]
  },
]

export function Cases() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-orange-glow/40" id="cases">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <FadeIn>
              <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
                — Кейсы и результаты
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-[var(--font-bebas)] text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px]">
                Цифры, которые <span className="text-orange italic">говорят</span>
                <br />сами за себя
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-text-dim text-base max-w-[380px]">
              Реальные результаты клиентов за последние 12 месяцев работы. Только проверенные данные.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {cases.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="bg-bg-card border border-border rounded-3xl p-9 h-full"
                whileHover={{ 
                  borderColor: "var(--orange)",
                  backgroundColor: "var(--bg-elevated)"
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block px-3.5 py-1.5 bg-orange-glow text-orange rounded-full text-xs font-semibold mb-6">
                  {item.niche}
                </span>
                <div className="font-[var(--font-bebas)] text-[72px] leading-none tracking-[-1px] text-orange mb-2">
                  <AnimatedCounter value={item.result} duration={1.8} />
                </div>
                <div className="text-sm text-text-dim mb-7">{item.resultLabel}</div>
                <h4 className="text-base mb-3">{item.title}</h4>
                <p className="text-text-dim text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <span className="font-mono text-xl font-bold block">{metric.value}</span>
                      <span className="text-[11px] text-text-muted uppercase">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
