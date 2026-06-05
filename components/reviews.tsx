"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const reviews = [
  {
    text: "За первый месяц получили 280 заявок по 340 рублей. До этого работали с агентством — там заявка выходила в 3 раза дороже. Артём реально погружается в проект.",
    name: "Марина Ковалёва",
    role: "Владелец салона красоты",
    initials: "МК",
  },
  {
    text: "Запустили рекламу интернет-магазина перед сезоном. ROAS вышел x5.2, окупили вложения за две недели. Отдельно ценю прозрачные отчёты каждую неделю.",
    name: "Денис Орлов",
    role: "Основатель бренда одежды",
    initials: "ДО",
  },
  {
    text: "Долго не верил в таргет после неудачного опыта. Но здесь всё по делу: аудит, стратегия, тесты. Сейчас стабильно 40-50 заявок в неделю на услуги.",
    name: "Игорь Зайцев",
    role: "Юридическая компания",
    initials: "ИЗ",
  },
  {
    text: "Лучший подрядчик за 4 года. Не просто настроил рекламу, а помог переупаковать оффер. Конверсия лендинга выросла вдвое, а цена лида упала.",
    name: "Анна Соколова",
    role: "Онлайн-школа",
    initials: "АС",
  },
]

export function Reviews() {
  return (
    <section className="py-24 relative" id="reviews">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <div className="font-mono text-xs text-orange uppercase tracking-[2px] mb-4">
              &mdash; Отзывы клиентов
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-bebas text-[clamp(40px,5vw,72px)] leading-none tracking-[-1px]">
              Что говорят те, кто <span className="text-orange italic">уже работал</span>
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <motion.div
                className="bg-bg-card border border-border rounded-3xl p-8 h-full flex flex-col"
                whileHover={{ borderColor: "rgba(255, 107, 26, 0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-1 mb-5 text-orange" aria-label="Оценка 5 из 5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} aria-hidden="true">&#9733;</span>
                  ))}
                </div>
                <p className="text-text text-[15px] leading-relaxed mb-7 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-orange/15 text-orange flex items-center justify-center font-semibold text-sm shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text">{review.name}</div>
                    <div className="text-xs text-text-dim">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
