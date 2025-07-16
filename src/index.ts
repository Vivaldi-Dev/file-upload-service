import express,{Express,Request,Response} from 'express'
import { PORT } from './utils/secrets'
import router from './routes/routes'

const app:Express = express()

app.use(express.json())

app.use('/api',router)

app.get('/',(req:Request,res:Response)=>{
    res.send('test api ')
})

app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})