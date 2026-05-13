"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { TiltCard } from "./effects/magnetic"

const processSteps = [
  {
    num: "01 / БРИФ",
    title: "Анализ бизнеса и аудитории",
    description: "Изучаю продукт, целевую аудиторию, конкурентов. Определяю УТП и точки роста. Без этого этапа реклама работает вслепую.",
    items: [
      { label: "Глубинное интервью", value: "2 часа" },
      { label: "Анализ конкурентов", value: "5-10 шт." },
      { label: "Сегментация ЦА", value: "3-7 сегментов" },
    ],
    icon: "01"
  },
  {
    num: "02 / СТРАТЕГИЯ",
    title: "Медиа-план и креативы",
    description: "Составляю стратегию запуска, прогнозирую CPL и количество лидов. Разрабатываю креативы под каждый сегмент аудитории.",
    items: [
      { label: "Медиаплан с KPI", value: "excel/notion" },
      { label: "Креативы", value: "10-20 шт." },
      { label: "Тексты объявлений", value: "5-15 вариантов" },
    ],
    icon: "02"
  },
  {
    num: "03 / ЗАПУСК",
    title: "Настройка и A/B-тесты",
    description: "Запускаю кампании в Meta Ads. Параллельно тестирую гипотезы — связки аудитория-креатив, плейсменты, форматы.",
    items: [
      { label: "Настройка пикселя", value: "включено" },
      { label: "A/B-тесты", value: "5-15 связок" },
      { label: "Запуск кампаний", value: "48 часов" },
    ],
    icon: "03"
  },
  {
    num: "04 / МАСШТАБ",
    title: "Оптимизация и рост",
    description: "Анализирую результаты, отключаю слабое, масштабирую рабочее. Каждую неделю — отчет и план на следующий период.",
    items: [
      { label: "Еженедельный отчёт", value: "каждый Пн" },
      { label: "Оптимизация ставок", value: "ежедневно" },
      { label: "Масштабирование", value: "с 3-й недели" },
    ],
    icon: "04"
  },
]

export function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <FadeIn>
              <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
                &mdash; Как я работаю
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px] max-w-[700px]">
                Процесс работы <span className="text-orange italic">прозрачен</span>
                <br />от брифа до результата
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-text-dim text-base max-w-[380px]">
              Никаких &quot;магических&quot; обещаний. Четкая методология, которая работает в любой нише.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.15}>
          {processSteps.map((step, index) => (
            <StaggerItem key={step.num}>
              <TiltCard className="h-full">
                <motion.div
                  className="bg-bg-card border border-border rounded-3xl p-10 relative overflow-hidden h-full group"
                  whileHover={{ 
                    borderColor: "var(--orange)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated background gradient on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Large number watermark */}
                  <div className="absolute -right-4 -top-8 font-bebas text-[180px] leading-none text-white/[0.03] pointer-events-none select-none">
                    {step.icon}
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="font-mono text-sm text-orange mb-6 inline-flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        &bull;
                      </motion.span>
                      {step.num}
                    </motion.div>
                    <h3 className="font-bebas text-[32px] tracking-[-0.5px] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-dim text-[15px] leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <ul className="list-none">
                      {step.items.map((item, itemIndex) => (
                        <motion.li 
                          key={item.label}
                          className="text-text-dim text-sm py-2 border-t border-border flex justify-between items-center"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1, x: 5 }}
                        >
                          <span className="flex items-center">
                            <motion.span 
                              className="text-orange mr-3"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: itemIndex * 0.2 }}
                            >
                              &rarr;
                            </motion.span>
                            {item.label}
                          </span>
                          <span className="text-text-muted">{item.value}</span>
                        </motion.li>
                      ))}
                    </ul>
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
