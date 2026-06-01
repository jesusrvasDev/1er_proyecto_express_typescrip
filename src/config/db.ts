import mongoose from "mongoose";

export const connectBD= async()=>{
    try {

          const url='mongodb+srv://jesusrvas_db_user:Checho1109$1@primercluster.lryuyvb.mongodb.net/bd_1proyecto_node'    
          
          const {connection} = await mongoose.connect(url)
          
          const url2= `${connection.host}:${connection.port}`

          console.log('MongoDB conectado en:', url2)
          console.log("La conexion es:",connection)

    }catch (error) {

          console.log("El error es:",error)     
    }
} 


