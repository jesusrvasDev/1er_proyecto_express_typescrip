import express from 'express'
import 'dotenv/config'
import router from './router'
import { connectBD } from './config/db'

const server=express()

//Llamo a la conexion con la bd
connectBD()

//Leer datos del cuerpo de una solicitud, por ejemplo en el caso de un formulario o una solicitud POST, PUT, PATCH, DELETE, etc. 
server.use(express.json())

// routing
server.use('/',router)


export default server