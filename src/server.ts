import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectBD } from './config/db'

const app=express()

//Llamo a la conexion con la bd
connectBD()

//Leer datos del cuerpo de una solicitud, por ejemplo en el caso de un formulario o una solicitud POST, PUT, PATCH, DELETE, etc. 
app.use(express.json())

// routing
app.use('/',router)


export default app