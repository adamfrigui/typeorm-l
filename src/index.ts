import { Transaction } from './entities/Transaction';
import { Banker } from './entities/Banker';
import { createConnection } from 'typeorm'
import { Client } from './entities/Client'
import express from 'express';
import { createClientRouter } from './routes/create_client';
import { createBankerRouter } from './routes/create_banker';
import { createTransactionRouter } from './routes/create_transaction';
import { connectBankertoClient } from './routes/connect_banker_client';
import { deleteClientRoute } from './routes/delete_client';
import { fetchClientRouter } from './routes/fetch_clients';
const app = express()
const PORT = 8080

const main = async () => {
    try {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "azdaz684",
            database: "typeorm",
            entities: [Client, Banker, Transaction],
            synchronize: true
        })
        console.log('connected to postgres')
        app.listen(8080, () => console.log(`server running on ${PORT}`))
        app.use(express.json())
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter)
        app.use(connectBankertoClient)
        app.use(deleteClientRoute)
        app.use(fetchClientRouter)
    } catch (error) {
        console.log(error)
        throw new Error('unable to connect to postgres')
    }
}


main()


