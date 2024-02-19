import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 5000

dotenv.config({})

app.use(express.json({ limit: '10mb' }))
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.listen(port, () => console.log('[server] app is running on port ' + port))
