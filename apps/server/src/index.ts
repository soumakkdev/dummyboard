import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import customerRoutes from './routes/customers'
import errorHandler from './middleware/errorHandler'
import createHttpError from 'http-errors'

dotenv.config({})

const app = express()
const port = process.env.PORT || 5000

app.use(express.json({ limit: '10mb' }))
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/customers', customerRoutes)
app.get('/', (_, res) => {
	res.json({ message: 'Welcome! 🙏' })
})
app.use((_, __, next) => {
	next(createHttpError.NotFound('Page Not Found'))
})
app.use(errorHandler)

app.listen(port, () => console.log('[server] app is running on port ' + port))
