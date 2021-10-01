import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const articuloSchema = new Schema({
    imagen: {type: String, default: "#"},
    nombreTecnico: {type: String, required: [true, 'Nombre tecnico obligatorio']},
    nombreComercial: {type: String},
    marca: {type: String},
    especificaciones:{type: String},
    precioCop: {type: Number}, 
    preciodolar: {type: Number},
    categoria: {type: String, required: true, unique: true}
});

// Convertir a modelo
const Articulo = mongoose.model('Articulo', articuloSchema);

export default Articulo;