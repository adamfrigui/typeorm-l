import { Banker } from './../entities/Banker';
import { Client } from './../entities/Client';
import express from 'express'

const router = express.Router()

router.post('/api/banker/:bankerId/client/:clientId', async (req, res) => {
    const { clientId, bankerId } = req.params;
    const client = await Client.findOne({ where: { id: parseInt(clientId) } })
    const banker = await Banker.findOne({ where: { id: parseInt(bankerId) } })

    if (!client || !banker) {
        return res.json({
            msg: "Client or Banker not found"
        })
    }
    banker.clients = [client]
    await banker.save()

    return res.json({
        msg: "banker connected to Client"
    })

})

export {
    router as connectBankertoClient
}