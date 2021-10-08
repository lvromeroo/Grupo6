import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const motherSchema = new Schema({
    imagen: {type: String, default: 'Imagen no disponible'},
    nombreTecnico: {type: String, required: [true, 'Nombre tecnico obligatorio']},
    nombreComercial: {type: String, required: [true, 'Nombre comercial obligatorio']},
    marca: {type: String, required: [true, 'Marca obligatoria']},
    especificaciones:{type: String, required: [true, 'Especificaciones obligatorias']},
    precioCop: {type: Number, required: [true, 'Precio en pesos colombianos obligatorio']}, 
    preciodolar: {type: Number, required: [true, 'Precio en dolares obligatorio']}
});

// Convertir a modelo
const Mother = mongoose.model('Mother', motherSchema);


export default Mother;