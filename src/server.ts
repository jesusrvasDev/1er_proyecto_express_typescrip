import express from 'express'
import 'dotenv/config'
import router from './router'
import dbPostgres from './config/dbPostgres' // Importar la instancia de Sequelize desde el archivo dbPostgres.ts para establecer la conexión con la base de datos PostgreSQL

const app=express()

//Llamo a la conexion con la bd
async function connectdbPostgres() { 
    try {
        await dbPostgres.authenticate(); // Intentar autenticar la conexión con la base de datos PostgreSQL
        dbPostgres.sync(); // Sincronizar los modelos de Sequelize con la base de datos PostgreSQL
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

//Leer datos del cuerpo de una solicitud, por ejemplo en el caso de un formulario o una solicitud POST, PUT, PATCH, DELETE, etc. 
app.use(express.json())

// routing
app.use('/',router)


export default app