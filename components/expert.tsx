"use client"

import { motion } from "framer-motion"
import { FadeIn } from "./animations"
import { TiltCard } from "./effects/magnetic"

const credentials = [
  "6 лет в performance-маркетинге",
  "Сертифицированный специалист Meta Blueprint",
  "Управлял бюджетами свыше 80 млн ₽",
  "Спикер на отраслевых конференциях",
]

export function Expert() {
  return (
    <section className="py-24 relative" id="expert">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <TiltCard>
              <div className="relative">
                <div className="absolute -inset-4 bg-[radial-gradient(circle,var(--orange-glow),transparent_70%)] pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden border border-border-strong aspect-[4/5]">
                  <img
                    src="/images/expert.png"
                    alt="Фотография специалиста по таргетированной рекламе"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#4ade80] rounded-full shadow-[0_0_12px_#4ade80]" />
                    <span className="text-sm text-text">Свободен для 3 проектов</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </FadeIn>

          <div>
            <FadeIn>
              <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
                &mdash; Кто будет вести ваш проект
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-bebas text-[clamp(40px,5vw,68px)] leading-none tracking-[-1px] mb-6">
                Привет, я <span className="text-orange italic">Артём</span>
                <br />таргетолог-практик
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-text-dim text-[17px] leading-relaxed mb-8 max-w-[520px]">
                Не агентство и не команда стажёров — вы работаете напрямую со мной. Я лично настраиваю,
                веду и оптимизирую каждую рекламную кампанию. Отвечаю за результат деньгами: если не выходим
                на плановые показатели в первый месяц — возвращаю оплату за работу.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-orange/15 text-orange flex items-center justify-center text-xs shrink-0">
                      &#10003;
                    </span>
                    <span className="text-sm text-text leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
