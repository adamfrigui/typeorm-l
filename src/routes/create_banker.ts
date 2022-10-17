import { Banker } from './../entities/Banker';
import express from 'express'

const router = express.Router()

router.post('/api/banker', async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        employee_number
    } = req.body

    const banker = Banker.create({
        first_name,
        last_name,
        email,
        card_number,
        employee_number
    })
    try {
        await banker.save()
    } catch (error) {
        console.log(error)
    }
    res.send(banker)
})

export {
    router as createBankerRouter
}