import express from 'express';

const router = express.Router();

// importar el modelo articulo
import User from '../models/user';
import Mother from '../models/mother';
import Procesador from '../models/procesador';
import Video from '../models/video';
import Ram from '../models/ram';
import F_energia from '../models/f_energia';
import Almacenamiento from '../models/almacenamiento';
import Refrigeracion from '../models/refrigeracion';
import Case from '../models/case';


// ====================================== Funciones para la categoria de tarjetas madre ==============================================

// Agregar un articulo mother
router.post('/nuevo-mother', async(req, res) => {
    const body = req.body;
    try {
        const motherDB = await Mother.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(motherDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/mother/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const motherDB = await Mother.findOne({_id});
        res.json(motherDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/mother', async(req, res) => {
    try {
        const motherDb = await Mother.find();
        res.json(motherDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo mother
router.delete('/mother/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const motherDb = await Mother.findByIdAndDelete({_id});
        if(!motherDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(motherDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo mother
router.put('/mother/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const motherDb = await Mother.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(motherDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de procesadores ==============================================

// Agregar un articulo procesador
router.post('/nuevo-procesador', async(req, res) => {
    const body = req.body;
    try {
        const procesadorDB = await Procesador.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(procesadorDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/procesador/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const procesadorDB = await Procesador.findOne({_id});
        res.json(procesadorDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/procesador', async(req, res) => {
    try {
        const procesadorDb = await Procesador.find();
        res.json(procesadorDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo procesador
router.delete('/procesador/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const procesadorDb = await Procesador.findByIdAndDelete({_id});
        if(!procesadorDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(procesadorDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo procesador
router.put('/procesador/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const procesadorDb = await Procesador.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(procesadorDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de tarjetas de video ==============================================

// Agregar un articulo video
router.post('/nuevo-video', async(req, res) => {
    const body = req.body;
    try {
        const videoDB = await Video.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(videoDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/video/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const videoDB = await Video.findOne({_id});
        res.json(videoDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/video', async(req, res) => {
    try {
        const videoDb = await Video.find();
        res.json(videoDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo video
router.delete('/video/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const videoDb = await Video.findByIdAndDelete({_id});
        if(!videoDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(videoDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo video
router.put('/video/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const videoDb = await Video.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(videoDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});
   
// ====================================== Funciones para la categoria de memorias RAM ==============================================

// Agregar un articulo ram
router.post('/nuevo-ram', async(req, res) => {
    const body = req.body;
    try {
        const ramDB = await Ram.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(ramDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/ram/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const ramDB = await Ram.findOne({_id});
        res.json(ramDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/ram', async(req, res) => {
    try {
        const ramDb = await Ram.find();
        res.json(ramDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo ram
router.delete('/ram/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const ramDb = await Ram.findByIdAndDelete({_id});
        if(!ramDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(ramDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo ram
router.put('/ram/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const ramDb = await Ram.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(ramDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de fuentes de energia ==============================================

// Agregar un articulo fuentes de energia
router.post('/nuevo-f_energia', async(req, res) => {
    const body = req.body;
    try {
        const f_energiaDB = await F_energia.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(f_energiaDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/f_energia/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const f_energiaDB = await F_energia.findOne({_id});
        res.json(f_energiaDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/f_energia', async(req, res) => {
    try {
        const f_energiaDb = await F_energia.find();
        res.json(f_energiaDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo fuente de energia
router.delete('/f_energia/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const f_energiaDb = await F_energia.findByIdAndDelete({_id});
        if(!f_energiaDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(f_energiaDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo fuente de energia
router.put('/f_energia/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const f_energiaDb = await F_energia.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(f_energiaDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de almacenamiento ==============================================

// Agregar un articulo almacenamiento
router.post('/nuevo-almacenamiento', async(req, res) => {
    const body = req.body;
    try {
        const almacenamientoDB = await Almacenamiento.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(almacenamientoDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/almacenamiento/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const almacenamientoDB = await Almacenamiento.findOne({_id});
        res.json(almacenamientoDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/almacenamiento', async(req, res) => {
    try {
        const almacenamientoDb = await Almacenamiento.find();
        res.json(almacenamientoDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo almacenamiento
router.delete('/almacenamiento/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const almacenamientoDb = await Almacenamiento.findByIdAndDelete({_id});
        if(!almacenamientoDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(almacenamientoDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo almacenamiento
router.put('/almacenamiento/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const almacenamientoDb = await Almacenamiento.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(almacenamientoDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de refrigeracion ==============================================

// Agregar un articulo refrigeracion
router.post('/nuevo-refrigeracion', async(req, res) => {
    const body = req.body;
    try {
        const refrigeracionDB = await Refrigeracion.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(refrigeracionDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/refrigeracion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const refrigeracionDB = await Refrigeracion.findOne({_id});
        res.json(refrigeracionDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/refrigeracion', async(req, res) => {
    try {
        const refrigeracionDb = await Refrigeracion.find();
        res.json(refrigeracionDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo refrigeracion
router.delete('/refrigeracion/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const refrigeracionDb = await Refrigeracion.findByIdAndDelete({_id});
        if(!refrigeracionDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(refrigeracionDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo refrigeracion
router.put('/refrigeracion/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const refrigeracionDb = await Refrigeracion.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(refrigeracionDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// ====================================== Funciones para la categoria de case ==============================================

// Agregar un articulo case
router.post('/nuevo-case', async(req, res) => {
    const body = req.body;
    try {
        const caseDB = await Case.create(body); //await es como el tiempo de espera en las peticiones del servidor
        res.status(200).json(caseDB);
    } catch (error) {
    return res.status(500).json({
        mensaje: 'Ocurrio un error',
        error
 })
 }
});

// Get con parámetros
router.get('/case/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const caseDB = await Case.findOne({_id});
        res.json(caseDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Get con todos los documentos
router.get('/case', async(req, res) => {
    try {
        const caseDb = await Case.find();
        res.json(caseDb);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Delete eliminar un articulo case
router.delete('/case/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const caseDb = await Case.findByIdAndDelete({_id});
        if(!caseDb){
            return res.status(400).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(caseDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
    }
   });

// Put actualizar un articulo case
router.put('/case/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const caseDb = await Case.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(caseDb);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Exportamos la configuración de express app
module.exports = router;