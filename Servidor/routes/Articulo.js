import express from 'express';

const router = express.Router();

// importar el modelo articulo
import Articulo from '../models/articulo';

// Agregar un articulo
router.post('/nuevo-articulo', async(req, res) => {
    const body = req.body;
    try {
        const articuloDB = await Articulo.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(articuloDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/articulo/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const articuloDB = await Articulo.findOne({_id});
        res.json(articuloDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/articulo', async(req, res) => {
    try {
        const articuloDb = await Articulo.find();
        res.json(articuloDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo
router.delete('/articulo/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const articuloDb = await Articulo.findByIdAndDelete({_id});
        if(!articuloDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(articuloDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo
router.put('/articulo/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const articuloDb = await Articulo.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(articuloDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});
   

// Exportamos la configuración de express app
module.exports = router;