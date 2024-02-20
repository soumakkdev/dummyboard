import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, z } from 'zod'

export const validateReqBody = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.parseAsync(req.body)
		return next()
	} catch (err) {
		if (err instanceof z.ZodError) {
			return res.status(400).json({ message: 'Invalid Request', errors: err.issues?.map((i) => ({ path: i.path, message: i.message })) })
		}
	}
}
