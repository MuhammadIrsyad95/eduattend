import {
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: text('id').primaryKey(),

  fullName: text('full_name').notNull(),

  email: text('email').notNull(),

  password: text('password').notNull(),

  role: text('role').notNull(),

  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
})