import express from 'express'
import router from './router'
import { connectBD } from './config/db'


const app=express()

//Leer datos del cuerpo de una solicitud
app.use(express.json())

//Llamo a la conexion con la bd
connectBD()

// routing
app.use('/',router)


export default app