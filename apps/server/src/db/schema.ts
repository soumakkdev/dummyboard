import { pgTable, serial, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }),
})

export type User = typeof users.$inferSelect
export type AddUser = typeof users.$inferInsert
