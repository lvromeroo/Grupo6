import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const usuario_logueadoSchema = new Schema({
    usuario: {type: String},
});

// Convertir a modelo
const Usuario_logueado = mongoose.model('Usuario_logueado', usuario_logueadoSchema);


export default Usuario_logueado;