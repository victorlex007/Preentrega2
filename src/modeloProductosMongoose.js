import mongoose from 'mongoose';

await mongoose.connect("mongodb+srv://vlezcano:<password>@cluster0.pwmavsn.mongodb.net/test"

);
const esquemaProductos = new mongoose.Schema({
    nombre: { type: String, required: true },
    edad: { type: Number, min: 0, required: true }
});

export const modeloPersonas = mongoose.model('personas', esquemaProductos);