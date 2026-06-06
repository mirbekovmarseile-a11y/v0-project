"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
}

const services = [
  {
    num: "01",
    badge: "ОСНОВНОЕ НАПРАВЛЕНИЕ",
    title: "Таргетированная реклама",
    subtitle: "Meta, Instagram, Facebook",
    description:
      "Настраиваем рекламу, которая приносит заявки и продажи. Не просто запуск кампаний — а выстраивание системы, которая работает в долгую.",
    items: [
      "Анализ ниши и конкурентов",
      "Разработка стратегии и креативов",
      "Запуск и A/B тестирование",
      "Еженедельная оптимизация",
      "Прозрачная отчётность",
    ],
  },
  {
    num: "02",
    badge: null,
    title: "SMM и контент",
    subtitle: "Instagram, TikTok",
    description:
      "Делаем контент, который не просто красивый, а работает на продажи. Reels, посты, сторис — всё под одну стратегию.",
    items: [
      "Контент-стратегия на 30 дней",
      "Съёмка и монтаж Reels",
      "Тексты постов и сторис",
      "Ведение и аналитика",
      "Рост охватов и подписчиков",
    ],
  },
  {
    num: "03",
    badge: null,
    title: "Продюсирование запусков",
    subtitle: "Для экспертов и онлайн-школ",
    description:
      "Полный цикл запуска — от упаковки продукта до закрытия продаж. Идеально для тех, кто хочет масштабировать экспертность.",
    items: [
      "Упаковка оффера и продукта",
      "Воронка продаж под ключ",
      "Реклама и набор аудитории",
      "Вебинар или прогрев",
      "Сопровождение продаж",
    ],
  },
]

export function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="mb-16">
          <FadeIn>
            <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
              &mdash; Что мы делаем
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px] max-w-[760px]">
              Три направления &mdash; <span className="text-orange italic">одна система</span> роста
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.num} className="h-full">
              <motion.div
                className="bg-bg-card border border-border rounded-3xl p-10 relative overflow-hidden h-full flex flex-col group"
                whileHover={{
                  borderColor: "var(--orange)",
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number watermark */}
                <div className="absolute -right-4 -top-8 font-bebas text-[180px] leading-none text-white/[0.03] pointer-events-none select-none">
                  {service.num}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="font-bebas text-[40px] leading-none text-orange mb-4">
                    {service.num}
                  </div>

                  {service.badge && (
                    <span className="self-start font-mono text-[10px] uppercase tracking-[1.5px] text-orange border border-orange/40 rounded-full px-3 py-1 mb-4">
                      {service.badge}
                    </span>
                  )}

                  <h3 className="font-bebas text-[34px] tracking-[-0.5px] leading-none mb-1">
                    {service.title}
                  </h3>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-[1px] mb-5">
                    {service.subtitle}
                  </div>

                  <p className="text-text-dim text-[15px] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="list-none flex flex-col gap-3 mb-8">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-dim">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-orange/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-orange" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className="mt-auto self-start font-mono text-sm text-orange inline-flex items-center gap-2 group/btn"
                  >
                    Подробнее
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">&rarr;</span>
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
