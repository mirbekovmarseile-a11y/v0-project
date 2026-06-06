"use client"

import { motion } from "framer-motion"
import { ShieldCheck, FileText, Wallet } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Прозрачность от и до",
    text: "Доступ к рекламному кабинету всегда у вас. Видите каждый рубль и каждую заявку в реальном времени. Никаких «чёрных ящиков».",
  },
  {
    icon: FileText,
    title: "Договор с KPI",
    text: "Фиксируем плановые показатели письменно ДО старта. Цена заявки, количество лидов, сроки — всё конкретно, не «попробуем — посмотрим».",
  },
  {
    icon: Wallet,
    title: "Не достигли KPI — возврат",
    text: "Если в первый месяц не выходим на согласованные показатели по нашей вине — возвращаем оплату за работу. Бюджет рекламы не возвращаем (он у Meta), но за свою работу отвечаем деньгами.",
  },
]

export function Guarantee() {
  return (
    <section className="py-24 relative" id="guarantee">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-[760px] mx-auto">
          <FadeIn>
            <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
              &mdash; Наши обязательства
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px] mb-6">
              Берём ответственность <span className="text-orange italic">за результат</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-text-dim text-[17px] leading-relaxed">
              Мы знаем, что доверить рекламный бюджет — это страшно. Поэтому даём конкретные гарантии — на бумаге, не на словах.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
          {guarantees.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  className="bg-bg-card border border-border rounded-3xl p-9 h-full flex flex-col"
                  whileHover={{ borderColor: "rgba(255, 107, 26, 0.4)", y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-full bg-orange/15 text-orange flex items-center justify-center mb-7">
                    <Icon className="w-7 h-7" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4">{item.title}</h3>
                  <p className="text-text-dim text-[15px] leading-relaxed">{item.text}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <p className="text-center font-bebas text-[clamp(26px,3.4vw,46px)] leading-tight tracking-[-0.5px] italic max-w-[900px] mx-auto mt-20 text-text-pretty">
            Мы строим бизнес на повторных клиентах, а не на разовых сделках. Поэтому{" "}
            <span className="text-orange">98% клиентов</span> продлевают сотрудничество.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
