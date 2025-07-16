import express,{Express,Request,Response} from 'express'
import { PORT } from './utils/secrets'
import router from './routes/routes'

const app:Express = express()

app.use(express.json())

app.use('/api',router)

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <h2>📁 File Upload API - Descrição</h2>
    <p>Esta API permite enviar e buscar arquivos com suporte a metadata.</p>

    <h3>✅ Endpoints disponíveis:</h3>
    <ul>
      <li><strong>POST /api/upload</strong> - Envia um arquivo (form-data com campo <code>file</code>)</li>
      <li><strong>GET /api/files/:id</strong> - Baixa ou exibe um arquivo usando o <code>id</code> retornado no upload</li>
    </ul>

    <h3>🚀 Como testar:</h3>
    <ol>
      <li>Use o <strong>Postman</strong> ou <strong>Insomnia</strong></li>
      <li>Para o upload, envie uma requisição <code>POST</code> para <code>/api/upload</code> com um arquivo no campo <code>file</code></li>
      <li>Copie o <code>id</code> retornado e acesse <code>/api/files/{id}</code> para visualizar ou baixar</li>
    </ol>

    <p>🔐 Certifique-se de que o servidor está rodando em <code>http://localhost:4000</code> ou na porta definida no .env</p>
  `);
});


app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`)
})