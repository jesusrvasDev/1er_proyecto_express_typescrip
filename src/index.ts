import express from 'express'
import server from './server'
import colors from 'colors'

const app=express()
const port= process.env.PORT || 4000

server.listen(port,()=>{
    console.log(colors.blue.bold(`servidor corriendo en el puerto,${port}`))
    

})

 

