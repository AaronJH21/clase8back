const { Router } = require('express')
const express = require ('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let messages =[
    {
        id:1,
        title:'ok',
        message:''
    },
    {
        id:2,
        title:'ko',
        message:''
    }
]
const messagesRouter = Router()
messagesRouter.get('', (req,res) => {
    return res.json(messages)
})
messagesRouter.post('',(req, res)=>{
    const newMessage=req.body
    newMessage.id = messages.length +1
    messages.push(newMessage)
    return res.status(201).json(newMessage)
})

app.get('/api/mensajes',(req,res)=>{
    return res.json(messages)
})

app.post('/api/mensajes',(req,res)=>{
    const newMessage =req.body
    newMessage.id = massages.length + 1
    messages.push(newMessage)
    return res.status(201).json(newMessage)
})
const PORT= 8080
const server = app.listen(PORT,()=>{
    console.log(`Servidor HTTP escuchando en el puerto${PORT}`)
})
server.on('error', error=> console.log(`Error en servidor:${error}`))
