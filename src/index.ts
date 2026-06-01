import express from 'express'
import server from './server'

const app=express()
const port=process.env.PORT || 4000

server.listen(port,()=>{
    console.log("Estoy repasando nodeJS, Servidor funcionando por el puerto 4000")
})


