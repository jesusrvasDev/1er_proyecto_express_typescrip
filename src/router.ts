import { Router} from "express";  // Se importa solo la funcion Router no express completo para no tener nos aplicaciones 
import User from "./Models/Users";

const router=Router()

// Auth and register 

router.post('/Auth/register',  async(resq,res)=>{

    await User.create(resq.body)  // Crea un nuevo documento en la colección de usuarios utilizando los datos proporcionados en el cuerpo de la solicitud (resq.body). Esto es útil para registrar nuevos usuarios en la base de datos. Usando el método estático create de Mongoose, que combina la creación y el guardado del documento en un solo paso. 

    //const user= new User(resq.body)  // Crea un nuevo documento en la colección de usuarios utilizando los datos proporcionados en el cuerpo de la solicitud (resq.body). Esto es útil para registrar nuevos usuarios en la base de datos. Usando el constructor de Mongoose para crear una instancia del modelo User con los datos proporcionados,noo guarda el documento en la base de datos hasta que se llame al método save().

    //await user.save()  // Guarda el nuevo documento de usuario en la base de datos. Esto es necesario para que el nuevo usuario se almacene permanentemente en la colección de usuarios.

    res.send('Usuario creado correctamente')
    console.log(resq.body)  
})


router.get('/',(resq,res)=>{
    res.send('En esta página va el Curriculum Jesús Rivas, ')
    console.log("Publicando curriculun de Jesus Rivas")
})

router.get('/portafolio',(resq,res)=>{
    res.send('En esta página va el portafolio ')
    console.log("Publicando mi portafolio")
})

router.post('/ecommers',(resq,res)=>{
    res.send('En esta página se dirige al ecommers ')
    console.log("Redirigiendo a ecommers")
})


export default router