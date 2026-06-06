"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const footerLinks = {
  services: [
    { label: "Таргет Instagram", href: "#" },
    { label: "Таргет Facebook", href: "#" },
    { label: "Аудит рекламы", href: "#" },
    { label: "Консультация", href: "#" },
  ],
  company: [
    { label: "О нас", href: "#" },
    { label: "Кейсы", href: "#cases" },
    { label: "Блог", href: "#" },
    { label: "Контакты", href: "#contact" },
  ],
  social: [
    { label: "Telegram", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border mt-16">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16">
          <FadeIn>
            <div>
              <Link href="/" className="font-[var(--font-bebas)] text-3xl tracking-[3px] inline-block mb-5">
                MARSEL
              </Link>
              <p className="text-text-dim text-sm max-w-[280px]">
                MARSEL — агентство таргета, SMM и продюсирования запусков в Бишкеке. Строим системы продаж для бизнеса любого масштаба.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h5 className="text-[13px] uppercase tracking-[1px] text-text-muted mb-5">Услуги</h5>
            </StaggerItem>
            <ul className="list-none">
              {footerLinks.services.map((link) => (
                <StaggerItem key={link.label}>
                  <li className="mb-3">
                    <motion.a
                      href={link.href}
                      className="text-text-dim text-sm hover:text-orange transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h5 className="text-[13px] uppercase tracking-[1px] text-text-muted mb-5">Компания</h5>
            </StaggerItem>
            <ul className="list-none">
              {footerLinks.company.map((link) => (
                <StaggerItem key={link.label}>
                  <li className="mb-3">
                    <motion.a
                      href={link.href}
                      className="text-text-dim text-sm hover:text-orange transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>

          <StaggerContainer staggerDelay={0.05}>
            <StaggerItem>
              <h5 className="text-[13px] uppercase tracking-[1px] text-text-muted mb-5">Соцсети</h5>
            </StaggerItem>
            <ul className="list-none">
              {footerLinks.social.map((link) => (
                <StaggerItem key={link.label}>
                  <li className="mb-3">
                    <motion.a
                      href={link.href}
                      className="text-text-dim text-sm hover:text-orange transition-colors duration-200"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>

        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-border text-text-muted text-[13px] gap-4">
            <span>© 2026 MARSEL. Все права защищены.</span>
            <span>Сделано с любовью к результату</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
