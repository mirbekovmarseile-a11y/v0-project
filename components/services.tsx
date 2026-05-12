"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const processSteps = [
  {
    num: "01 / БРИФ",
    title: "Анализ бизнеса и аудитории",
    description: "Изучаю продукт, целевую аудиторию, конкурентов. Определяю УТП и точки роста. Без этого этапа реклама работает вслепую.",
    items: [
      { label: "Глубинное интервью", value: "2 часа" },
      { label: "Анализ конкурентов", value: "5–10 шт." },
      { label: "Сегментация ЦА", value: "3–7 сегментов" },
    ]
  },
  {
    num: "02 / СТРАТЕГИЯ",
    title: "Медиа-план и креативы",
    description: "Составляю стратегию запуска, прогнозирую CPL и количество лидов. Разрабатываю креативы под каждый сегмент аудитории.",
    items: [
      { label: "Медиаплан с KPI", value: "excel/notion" },
      { label: "Креативы", value: "10–20 шт." },
      { label: "Тексты объявлений", value: "5–15 вариантов" },
    ]
  },
  {
    num: "03 / ЗАПУСК",
    title: "Настройка и A/B-тесты",
    description: "Запускаю кампании в Meta Ads. Параллельно тестирую гипотезы — связки аудитория-креатив, плейсменты, форматы.",
    items: [
      { label: "Настройка пикселя", value: "включено" },
      { label: "A/B-тесты", value: "5–15 связок" },
      { label: "Запуск кампаний", value: "48 часов" },
    ]
  },
  {
    num: "04 / МАСШТАБ",
    title: "Оптимизация и рост",
    description: "Анализирую результаты, отключаю слабое, масштабирую рабочее. Каждую неделю — отчет и план на следующий период.",
    items: [
      { label: "Еженедельный отчёт", value: "каждый Пн" },
      { label: "Оптимизация ставок", value: "ежедневно" },
      { label: "Масштабирование", value: "с 3-й недели" },
    ]
  },
]

export function Services() {
  return (
    <section className="py-24" id="services">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <FadeIn>
              <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
                — Как я работаю
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-[var(--font-bebas)] text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px] max-w-[700px]">
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {processSteps.map((step) => (
            <StaggerItem key={step.num}>
              <motion.div
                className="bg-bg-card border border-border rounded-3xl p-10 relative overflow-hidden h-full"
                whileHover={{ 
                  borderColor: "var(--orange)",
                  y: -4
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-mono text-sm text-orange mb-6">{step.num}</div>
                <h3 className="font-[var(--font-bebas)] text-[32px] tracking-[-0.5px] mb-4">
                  {step.title}
                </h3>
                <p className="text-text-dim text-[15px] leading-relaxed mb-5">
                  {step.description}
                </p>
                <ul className="list-none">
                  {step.items.map((item) => (
                    <li 
                      key={item.label}
                      className="text-text-dim text-sm py-2 border-t border-border flex justify-between"
                    >
                      <span className="flex items-center">
                        <span className="text-orange mr-3">→</span>
                        {item.label}
                      </span>
                      <span>{item.value}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
