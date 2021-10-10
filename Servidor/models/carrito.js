import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const disenoSchema = new Schema({
    nombre: {type: String}
});

const Carrito = mongoose.model('Carrito', carritoSchema);

export default Articulo;