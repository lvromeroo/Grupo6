import express from 'express';
const router = express.Router();

//importar el modelo nota
import User from '../models/user';
import Usuario_logueado from '../models/usuario_logueado';



// intento
router.post('/nuevo-user', async(req, res) => {
    const body = req.body;
    try{
        const userDB = await User.create(body);
        res.status(200).json({mensaje:'todo listo'});
        console.log(userDB);
    } catch ( error ){
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

router.post('/autenticar', (req, res) =>{
    const {username, password} = req.body;

    User.findOne({username}, (err, user) =>{
        if(err){
            res.status(500).send('error al autenticar el usuario');

        }else if (!user){
            res.status(500).send('usuario no registrado');
        }else{
            user.isCorrectPassword(password, (err, result) =>{
                if(err){
                    res.status(500).send('error al autenticar');

                }else if(result){
                    res.status(200).json({mensaje:'usuario autenticado correctamente'});                  
                }else{
                    res.status(500).send('usuario o contraseña incorrecta');
                }
            });
        }
    });

});

router.post('/register', (req, res) =>{
    const {username, password} = req.body;

    const user = new User({username, password});
    user.save(err =>{
        if(err){
            res.status(500).send('error al registrar usuario');
        }else{
            res.status(200).send('usuario registrado');
        }
    });
});

// Obtener usuarios
router.get('/user', async(req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Obtener un usuario por username
router.get('/user/:username', async(req, res) => {
    const username = req.params.username;
    try {
        const userDB = await User.findOne({username});
        res.json(userDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

// Put actualizar informacion de usuario
router.put('/user/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const user = await User.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(user);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});


// ============================================== Obtencion del usuario logueado ===================================================
// Put para actualizar el usuario que esta logueado
router.put('/usuario_logueado/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuario_logueado = await Usuario_logueado.findByIdAndUpdate(
        _id,
        body,
        {new: true});
        res.json(usuario_logueado);
    } catch (error) {
        return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});

router.post('/nuevo-usuario_logueado', async(req, res) => {
    const body = req.body;
    try{
        const usuario_logueadoDB = await Usuario_logueado.create(body);
        res.status(200).json({mensaje:'todo listo'});
        console.log(usuario_logueadoDB);
    } catch ( error ){
        return res.status(500).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});

router.get('/usuario_logueado/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const usuario_logueadoDB = await Usuario_logueado.findOne({_id});
        res.json(usuario_logueadoDB);
    } catch (error) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
    })
}
});


//ensayo y error

// router.get('/user', async(req, res) =>{
//     try{
//         const userDb = await User.find();
//         res.json(userDb);
//     }catch(error){
//         return res.status(400).json({
//             mensaje: 'ocurrio un error',
//             error
//         })
//     }
// });

// router.post('/register', (req, res) =>{
//     const {username, password} = req.body;

//     const user = new User({username, password});
//     user.save(err =>{
//         if(err){
//             res.status(500).send('error al registrar usuario');
//         }else{
//             res.status(200).send('usuario registrado');
//         }
//     });
// });



//viejo

// router.post('/register', (req, res) =>{
//     const {username, password} = req.body;

//     const user = new User({username, password});
//     user.save(err =>{
//         if(err){
//             res.status(500).send('error al registrar usuario');
//         }else{
//             res.status(200).send('usuario registrado');
//         }
//     });
// });




module.exports = router;