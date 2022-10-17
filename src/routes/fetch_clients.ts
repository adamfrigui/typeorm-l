import { Client } from './../entities/Client';
import express from 'express'
import { createQueryBuilder } from 'typeorm';


const router = express.Router()


router.get('/api/bankers', async (req, res) => {
    const client = await createQueryBuilder('client')
        .select('client.first_name')
        .addSelect('client.last_name')
        // .leftJoinAndSelect('client.transactions', 'transactions')
        .from(Client, 'client')
        .where("client.id = :clientId", { clientId: 1 })
        .getOne()
    return res.json(client)
})

export {
    router as fetchClientRouter
}