import express from 'express'
import { addCustomer, getCustomers } from '../controllers/customers'
import { ZAddUserSchema } from '../db/schema'
import { validateReqBody } from '../middleware/validateZod'

const router = express.Router()

router.get('/', getCustomers)
router.post('/', validateReqBody(ZAddUserSchema), addCustomer)

export default router
