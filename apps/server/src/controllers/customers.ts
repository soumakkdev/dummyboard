import { NextFunction, Request, Response } from 'express'
import { db } from '../db/db'
import { AddUser, users } from '../db/schema'

export async function getCustomers(req: Request, res: Response, next: NextFunction) {
	try {
		const data = await db.select().from(users)
		res.status(200).json({ success: true, data })
	} catch (error) {
		next(error)
	}
}

export async function addCustomer(req: Request, res: Response, next: NextFunction) {
	try {
		const data = req.body as AddUser
		await db.insert(users).values(data)
	} catch (error) {
		next(error)
	}
}
