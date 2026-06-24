import mongoose from "mongoose";

interface IUserType {
    name: string;
    email: string;
    password: string;
}   

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
});


const User = mongoose.model<IUserType>('User', userSchema);     // Aqui se asocia la interfaz IUserType con el esquema userSchema, lo que significa que cualquier documento creado con el modelo User debe cumplir con la estructura definida en IUserType. Esto proporciona una capa adicional de seguridad de tipos al trabajar con documentos de usuario en la base de datos, ya que garantiza que los datos almacenados cumplan con la estructura esperada.

export default User;
