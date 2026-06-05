"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { motion, useReducedMotion } from "framer-motion"
import { submitLead, type LeadFormState } from "@/app/actions/leads"

const initialState: LeadFormState = { status: "idle", message: "" }

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  const reduceMotion = useReducedMotion()

  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="w-full bg-orange text-black py-4 rounded-2xl font-semibold text-[15px] relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
      whileHover={pending || reduceMotion ? undefined : { boxShadow: "0 0 40px rgba(255, 107, 26, 0.4)" }}
      whileTap={pending ? undefined : { scale: 0.98 }}
    >
      {pending ? (
        <>
          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true" />
          Отправляю...
        </>
      ) : (
        label
      )}
    </motion.button>
  )
}

type LeadFormProps = {
  source: string
  submitLabel?: string
  variant?: "full" | "compact"
  withMessage?: boolean
}

export function LeadForm({
  source,
  submitLabel = "Получить бесплатный аудит",
  variant = "full",
  withMessage = true,
}: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state.status])

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-bg-card border border-orange/40 rounded-2xl p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-12 h-12 rounded-full bg-orange/15 text-orange flex items-center justify-center mx-auto mb-4 text-2xl">
          &#10003;
        </div>
        <h3 className="font-bebas text-2xl tracking-[-0.5px] mb-2">Заявка отправлена!</h3>
        <p className="text-text-dim text-sm">{state.message}</p>
      </motion.div>
    )
  }

  const inputClass =
    "w-full bg-black/40 border border-border-strong rounded-2xl px-5 py-4 text-text text-sm outline-none transition-all duration-300 focus:border-orange focus:shadow-[0_0_20px_rgba(255,107,26,0.15)] placeholder:text-text-muted"

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-3" noValidate>
      <input type="hidden" name="source" value={source} />
      {/* Honeypot - hidden from real users */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px opacity-0"
      />

      <div>
        <label htmlFor={`${source}-name`} className="sr-only">
          Ваше имя
        </label>
        <input id={`${source}-name`} name="name" type="text" required placeholder="Ваше имя" className={inputClass} />
      </div>

      <div>
        <label htmlFor={`${source}-contact`} className="sr-only">
          Email, телефон или Telegram
        </label>
        <input
          id={`${source}-contact`}
          name="contact"
          type="text"
          required
          placeholder="Email, телефон или @telegram"
          className={inputClass}
        />
      </div>

      {withMessage && variant === "full" && (
        <div>
          <label htmlFor={`${source}-message`} className="sr-only">
            Расскажите о вашем проекте
          </label>
          <textarea
            id={`${source}-message`}
            name="message"
            placeholder="Расскажите о вашем проекте (необязательно)"
            className={`${inputClass} min-h-[80px] resize-y`}
          />
        </div>
      )}

      {state.status === "error" && (
        <p className="text-sm text-red-400" role="alert" aria-live="assertive">
          {state.message}
        </p>
      )}

      <SubmitButton label={submitLabel} />

      <p className="text-[11px] text-text-muted leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных и политикой конфиденциальности.
      </p>
    </form>
  )
}
