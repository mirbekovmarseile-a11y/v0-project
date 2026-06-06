"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter } from "./animations"

const cases = [
  {
    niche: "BEAUTY & WELLNESS",
    title: "Beauty Lab — клиника косметологии",
    result: "+12%",
    resultLabel: "роста оборота за год",
    description:
      "Выстроили системный маркетинг: воронка продаж, прогрев в соцсетях, таргет на ключевые услуги. За год — рост оборота на 12% и стабильный поток клиентов.",
    before: { label: "Было", metric1: "хаос в воронке", metric2: "—" },
    after: { label: "Стало", metric1: "+12% оборота", metric2: "система продаж" },
    duration: "12 месяцев",
    role: "Коммерческий директор + маркетинг",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    niche: "ОБУЧЕНИЕ",
    title: "Выпускники программы MARSEL",
    result: "500К",
    resultLabel: "сом/мес — потолок учеников",
    description:
      "Вели курс по таргету и продюсированию для начинающих. Выпускники стали маркетологами и продюсерами — выходят на доход от 20 000 до 500 000 сом в месяц.",
    before: { label: "До", metric1: "0 опыта", metric2: "—" },
    after: { label: "После", metric1: "от 20К сом", metric2: "до 500К сом/мес" },
    duration: "3 потока",
    role: "Куратор и преподаватель",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    niche: "E-COMMERCE",
    title: "Запуск нового бренда",
    result: "x4+",
    resultLabel: "окупаемость рекламы",
    description:
      "Запустили новый бренд с нуля — упаковка, контент, таргет и SMM в связке. Через 3 месяца — стабильный поток клиентов и окупаемость рекламы в 4+ раза.",
    before: { label: "Старт", metric1: "0 заявок", metric2: "0 ROAS" },
    after: { label: "Через 3 мес", metric1: "стабильный поток", metric2: "ROAS x4+" },
    duration: "3 месяца",
    role: "Полное продюсирование",
    gradient: "from-orange/20 to-transparent",
  },
]

export function Cases() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

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
              Реальные результаты клиентов и учеников. Не разовые настройки — а выстроенные системы продаж.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch" staggerDelay={0.15}>
          {cases.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="bg-bg-card border border-border rounded-3xl p-9 h-full flex flex-col relative overflow-hidden group"
                whileHover={{
                  borderColor: "var(--orange)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.span
                    className="inline-block self-start px-3.5 py-1.5 bg-orange/10 text-orange rounded-full text-xs font-semibold mb-6 border border-orange/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.niche}
                  </motion.span>

                  <div className="font-bebas text-[72px] leading-none tracking-[-1px] text-orange mb-2">
                    <AnimatedCounter value={item.result} duration={1.8} />
                  </div>

                  <div className="text-sm text-text-dim mb-7">{item.resultLabel}</div>
                  <h4 className="text-base mb-3 font-semibold">{item.title}</h4>
                  <p className="text-text-dim text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* До → После */}
                  <div className="mt-auto grid grid-cols-[1fr_auto_1fr] items-center gap-3 pt-6 border-t border-border">
                    <div>
                      <span className="text-[11px] text-text-muted uppercase tracking-[1px] block mb-1.5">
                        {item.before.label}
                      </span>
                      <span className="text-sm text-text-dim block leading-snug">{item.before.metric1}</span>
                      <span className="text-sm text-text-dim block leading-snug">{item.before.metric2}</span>
                    </div>

                    <ArrowRight className="w-5 h-5 text-orange shrink-0" aria-hidden="true" />

                    <div className="text-right">
                      <span className="text-[11px] text-orange uppercase tracking-[1px] block mb-1.5">
                        {item.after.label}
                      </span>
                      <span className="text-sm text-text font-semibold block leading-snug">{item.after.metric1}</span>
                      <span className="text-sm text-text font-semibold block leading-snug">{item.after.metric2}</span>
                    </div>
                  </div>

                  {/* Длительность и роль */}
                  <div className="flex items-center gap-2 mt-5 text-[11px] text-text-muted">
                    <span>{item.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>{item.role}</span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mini-CTA */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center text-center gap-5 mt-16">
            <p className="text-lg text-text-dim text-balance max-w-[420px]">
              Хотите такой же результат для своего бизнеса?
            </p>
            <motion.button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-orange text-black px-7 py-3.5 rounded-full font-semibold text-[15px]"
              whileHover={{ boxShadow: "0 0 40px rgba(255, 107, 26, 0.4)", scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Получить план роста
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </motion.button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
