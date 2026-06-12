import express from 'express'
import server from './server'
import colors from 'colors'

const app=express()
const port= process.env.PORT || 4000

server.listen(port,()=>{
    console.log(colors.blue.bold(`servidor corriendo en el puerto,${port}`))
    

})



// Prueba de tipo de datos de usuario definido en el modelo de usuario
// Definiendo el Type 

interface UserType  {
    name: string;
    email: string;
    password: string;
    edad?: number;     // La edad es opcional
}

let user : UserType= {
    name: "John Doe",
    email: "prueba@example.com",
    password: "password123",
    edad: 25
}

    let user2 : UserType= {
    name: "Juan Diaz",
    email: "juandiaz@example.com",
    password: "password456",
    edad: 30
}



