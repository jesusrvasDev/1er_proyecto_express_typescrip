import mongoose from "mongoose";
import colors from "colors";

//console.log(process.env.MONGO_URI)

export const connectBD = async () => {
    try {
                
          const {connection} = await mongoose.connect(process.env.MONGO_URI) 
          
          const url= `${connection.host}:${connection.port}`

          console.log('MongoDB conectado en:', url)
          //console.log("La conexion es:",connection)


    }catch (error) {

          console.log(colors.red(`El error es:"), ${error}`))     
    }
} 


