import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const notaSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},//required significa que es obligatorio
    descripcion: String,
    usuarioId: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true} //defaut es para establecer un valor por defecto
});

// Convertir a modelo
const Nota = mongoose.model('Nota', notaSchema);

export default Nota;