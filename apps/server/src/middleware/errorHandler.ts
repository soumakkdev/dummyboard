import { NextFunction, Request, Response } from 'express'

const errorHandler = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
	console.error('[error] ', err.stack)

	const statusCode = err.status ?? err.statusCode ?? 500
	const message = err.message ?? 'Internal Server Error'

	res.status(statusCode).json({ message: message, success: false })
}

export default errorHandler
