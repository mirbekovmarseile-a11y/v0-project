"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "./animations"
import { TiltCard } from "./effects/magnetic"

const cases = [
  {
    niche: "E-COMMERCE",
    result: "x4.7",
    resultLabel: "ROAS за 3 месяца",
    title: "Магазин эко-косметики",
    description: "Снизили CPL с 480 до 127 рублей. Запустили динамический ремаркетинг - выручка выросла в 4.7 раза.",
    metrics: [
      { value: "127р", label: "CPL" },
      { value: "2.8М", label: "оборот / мес" },
    ],
    gradient: "from-emerald-500/20 to-transparent"
  },
  {
    niche: "УСЛУГИ",
    result: "340",
    resultLabel: "заявок за месяц",
    title: "Стоматологическая клиника",
    description: "Запустили лидогенерацию на имплантацию. CPL - 890 рублей при средней цене заявки в нише 2500 рублей.",
    metrics: [
      { value: "890р", label: "CPL" },
      { value: "38%", label: "конверсия в запись" },
    ],
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    niche: "ИНФОБИЗНЕС",
    result: "x12",
    resultLabel: "окупаемость курса",
    title: "Онлайн-школа дизайна",
    description: "Воронка через лид-магнит и вебинар. Стоимость регистрации 65 рублей, окупаемость рекламы x12.",
    metrics: [
      { value: "65р", label: "регистрация" },
      { value: "4.2К", label: "учеников" },
    ],
    gradient: "from-purple-500/20 to-transparent"
  },
]

export function Cases() {
  return (
    <section className="py-24 relative" id="cases">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <FadeIn>
              <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
                &mdash; Кейсы и результаты
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px]">
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
          {cases.map((item, index) => (
            <StaggerItem key={item.title}>
              <TiltCard className="h-full">
                <motion.div
                  className="bg-bg-card border border-border rounded-3xl p-9 h-full relative overflow-hidden group"
                  whileHover={{ 
                    borderColor: "var(--orange)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.span 
                      className="inline-block px-3.5 py-1.5 bg-orange/10 text-orange rounded-full text-xs font-semibold mb-6 border border-orange/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.niche}
                    </motion.span>
                    
                    <motion.div 
                      className="font-bebas text-[72px] leading-none tracking-[-1px] text-orange mb-2"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <AnimatedCounter value={item.result} duration={1.8} />
                    </motion.div>
                    
                    <div className="text-sm text-text-dim mb-7">{item.resultLabel}</div>
                    <h4 className="text-base mb-3 font-semibold">{item.title}</h4>
                    <p className="text-text-dim text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 pt-6 border-t border-border">
                      {item.metrics.map((metric, metricIndex) => (
                        <motion.div 
                          key={metric.label}
                          initial={{ opacity: 0.8 }}
                          whileHover={{ opacity: 1, y: -2 }}
                          transition={{ delay: metricIndex * 0.1 }}
                        >
                          <span className="font-mono text-xl font-bold block text-text">{metric.value}</span>
                          <span className="text-[11px] text-text-muted uppercase">{metric.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
