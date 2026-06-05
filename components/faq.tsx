"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FadeIn } from "./animations"

const faqs = [
  {
    q: "Сколько стоит ваша работа?",
    a: "Стоимость зависит от ниши и объёма задач. Базовый формат ведения — от 40 000 ₽/мес плюс рекламный бюджет. Точную цену назову после бесплатного аудита, когда пойму вашу ситуацию и цели.",
  },
  {
    q: "Какой нужен рекламный бюджет для старта?",
    a: "Для большинства ниш рекомендую минимум 50 000–60 000 ₽ в месяц на сам бюджет рекламы. Этого достаточно, чтобы собрать данные, протестировать связки и выйти на стабильный поток заявок.",
  },
  {
    q: "Как быстро будут первые результаты?",
    a: "Первые заявки обычно приходят в течение 3–7 дней после запуска. На стабильные показатели и оптимизированную стоимость лида выходим за 2–4 недели — это период обучения алгоритмов и тестов.",
  },
  {
    q: "Вы даёте гарантии?",
    a: "Гарантирую прозрачность и полную отчётность. Если в первый месяц не выходим на согласованные KPI по моей вине — возвращаю оплату за работу. Конкретные цифры фиксируем письменно до старта.",
  },
  {
    q: "С какими нишами вы работаете?",
    a: "E-commerce, услуги, инфобизнес, медицина, недвижимость, локальный бизнес. Не берусь только за тематики, запрещённые правилами Meta. Если сомневаетесь — напишите, обсудим.",
  },
  {
    q: "Что входит в бесплатный аудит?",
    a: "Разбор текущей рекламы (или стратегии запуска с нуля), анализ конкурентов, оценка оффера и посадочной страницы, прогноз по стоимости заявки и план действий. Занимает 15–20 минут созвона.",
  },
]

function FaqItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-bg-card">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-text font-medium text-base">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-orange text-2xl leading-none shrink-0"
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-text-dim text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-[860px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <FadeIn>
            <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
              &mdash; Частые вопросы
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px]">
              Отвечаю на то, что <span className="text-orange italic">спрашивают чаще всего</span>
            </h2>
          </FadeIn>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.05}>
              <FaqItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
