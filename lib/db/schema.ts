import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  message: text("message"),
  source: text("source").notNull().default("website"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})
