# 📁 File Upload API


## 🚀 Endpoints

GET /api/files/:id
Baixa ou exibe o arquivo com o id informado.

Exemplo: GET /api/files/89b0a9ce-8a0f-42ae-9371-d9d7024e888d


### POST `/api/upload`
Faz upload de um arquivo.

- Tipo: `multipart/form-data`
- Campo obrigatório: `file`

📥 **Exemplo de resposta:**
```json
{
  "message": "File uploaded",
  "file": {
    "id": "uuid...",
    "filename": "nome.pdf",
    "mimetype": "application/pdf",
    "size": 12345,
    "path": "uploads/...",
    "uploadedAt": "..."
  }
}

