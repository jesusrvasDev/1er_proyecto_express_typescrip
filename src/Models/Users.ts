import mongoose from "mongoose";

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
    }
});

const User = mongoose.model('User', userSchema);

export default User;


let namen= "Jesus Rivas"
let email= "jesusrivas@example.com"
let recibido=false

let notas= [12, 15, 18, 20, true, "Hola", {nombre: "Juan"}, [1, 2, 3], null, undefined]


