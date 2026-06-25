import {Sequelize} from "sequelize-typescript"; // Importar la clase Sequelize desde el paquete sequelize-typescript para interactuar con la base de datos PostgreSQL
import dotenv from "dotenv";    // Importar la biblioteca dotenv para cargar variables de entorno desde un archivo .env

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Sequelize utilizando la URL de la base de datos desde las variables de entorno 
const dbPostgres = new Sequelize(process.env.DATABASE_URL!);

// Exportar la instancia de Sequelize para su uso en otras partes de la aplicación
export default dbPostgres;
