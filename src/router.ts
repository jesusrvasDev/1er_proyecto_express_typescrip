import { Router} from "express";  // Se importa solo la funcion Router no express completo para no tener nos aplicaciones 

const router=Router()

// Auth and register 

router.post('/Auth/register',(resq,res)=>{
    res.send('Te estas autenticando mano')
    console.log('Se esta validado un usuario')
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