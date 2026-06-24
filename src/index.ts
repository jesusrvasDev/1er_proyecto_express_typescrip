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

interface  UserType   {
    id: number ;
    name: string;
    email: string;
    password: string;
    edad?: number;     // La edad es opcional
}

/*
 interface userfull extends UserType {     // La interfaz userfull extiende de UserType, por lo que hereda sus propiedades, una nueva propiedad foto es añadida a la interfaz userfull, lo que significa que cualquier objeto que implemente userfull debe tener todas las propiedades de UserType más la propiedad foto.
   // foto: string;
} 
*/   

type userfull = UserType & { 
    foto: string
 };  // La intersección de tipos userfull combina las propiedades de UserType con la propiedad foto, lo que significa que cualquier objeto que implemente userfull debe tener todas las propiedades de UserType más la propiedad foto.


type userId = {
    id: UserType['id']    // El tipo userId tiene una propiedad id que es del mismo tipo que la propiedad id definida en UserType, lo que significa que cualquier objeto que implemente userId debe tener una propiedad id con el mismo tipo que la propiedad id en UserType. Esto es útil para garantizar la consistencia en el tipo de datos utilizado para la propiedad id en diferentes partes del código. Lookop type es una característica de TypeScript que permite crear un nuevo tipo basado en la propiedad de otro tipo. En este caso, userId es un nuevo tipo que tiene una propiedad id que es del mismo tipo que la propiedad id definida en UserType. Esto es útil para garantizar la consistencia en el tipo de datos utilizado para la propiedad id en diferentes partes del código, ya que cualquier cambio en el tipo de datos de la propiedad id en UserType se reflejará automáticamente en el tipo userId.
}

let user : UserType= {
    id: 1,
    name: "John Doe",
    email: "prueba@example.com",
    password: "password123",
    edad: 25
}

    let user2 : UserType= {
    id: 2,
    name: "Juan Diaz",
    email: "juandiaz@example.com",
    password: "password456",
    edad: 30
}

    let user3 :userfull= {
    id: 3,
    name: "Maria Garcia",
    email: "maria@example.com",
    password: "password789",
    edad: 28,
    foto: "https://example.com/foto.jpg"
}

    let user4 : userfull= {
    id: 4,
    name: "Carlos Perez",
    email: "carlos@example.com",
    password: "password012",
    edad: 35,
    foto: "https://example.com/foto2.jpg"
}


