import express from 'express'
import server from './server'

const app=express()
const port= process.env.PORT || 4000

server.listen(port,()=>{
    console.log("servidor corriendo en el puerto",port)
    

})

 

