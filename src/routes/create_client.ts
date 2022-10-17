import { Client } from './../entities/Client';
import express from 'express'

const router = express.Router()


router.post('/api/client', async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        card_number,
        balance
    } = req.body;
    const client = Client.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        card_number: card_number,
        balance: balance
    })
    try {
        await client.save()
    } catch (error) {
        console.log(error)
    }
    res.send(client)
});

export {
    router as createClientRouter
}