import { relations } from 'drizzle-orm'
import { pgTable, serial, varchar, pgEnum, integer } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const genderEnum = pgEnum('gender', ['male', 'female'])

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	emailId: varchar('email_id', { length: 255 }).notNull(),
	phoneNo: varchar('phone_no', { length: 255 }),
	dateOfBirth: varchar('date_of_birth', { length: 255 }),
	gender: genderEnum('gender').notNull(),
	website: varchar('website', { length: 255 }),
	addressId: integer('address_id').references(() => addresses.id),
})

export const addresses = pgTable('addresses', {
	id: serial('id').primaryKey().notNull(),
	locality: varchar('locality', { length: 255 }),
	landmark: varchar('landmark', { length: 255 }),
	city: varchar('city', { length: 255 }),
	state: varchar('state', { length: 255 }),
	zipCode: varchar('zip_code', { length: 255 }),
	country: varchar('country', { length: 255 }).notNull(),
	timezone: varchar('timezone', { length: 255 }),
})

export type User = typeof users.$inferSelect
export type AddUser = typeof users.$inferInsert
export type Address = typeof addresses.$inferSelect
export type AddAddress = typeof addresses.$inferInsert

export const ZAddUserSchema = createInsertSchema(users)
export const ZUserSchema = createSelectSchema(users)

export const usersRelations = relations(users, ({ one }) => ({
	address: one(addresses),
}))
