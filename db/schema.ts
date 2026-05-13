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

export const attendance = pgTable('attendance', {
  id: text('id').primaryKey(),

  userId: text('user_id').notNull(),

  course: text('course').notNull(),

  status: text('status').notNull(),

  checkIn: text('check_in'),

  checkOut: text('check_out'),

  date: text('date').notNull(),

  createdAt: timestamp('created_at')
    .defaultNow()
    .notNull(),
})