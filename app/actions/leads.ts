"use server"

import { db } from "@/lib/db"
import { leads } from "@/lib/db/schema"

export type LeadFormState = {
  status: "idle" | "success" | "error"
  message: string
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim()
  const contact = String(formData.get("contact") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const source = String(formData.get("source") ?? "website").trim()
  // Honeypot field for bots
  const honeypot = String(formData.get("company") ?? "").trim()

  if (honeypot) {
    // Silently accept to not tip off bots, but don't store
    return { status: "success", message: "Заявка отправлена!" }
  }

  if (name.length < 2) {
    return { status: "error", message: "Укажите имя (минимум 2 символа)." }
  }

  if (contact.length < 5) {
    return {
      status: "error",
      message: "Укажите телефон, email или ник в Telegram.",
    }
  }

  try {
    await db.insert(leads).values({
      name,
      contact,
      message: message || null,
      source: source || "website",
    })

    return {
      status: "success",
      message: "Спасибо! Заявка отправлена — свяжусь с вами в ближайшее время.",
    }
  } catch (error) {
    console.error("[v0] submitLead error:", error)
    return {
      status: "error",
      message: "Что-то пошло не так. Попробуйте ещё раз или напишите в Telegram.",
    }
  }
}
