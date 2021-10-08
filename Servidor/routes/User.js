import express from 'express';
const router = express.Router();

//importar el modelo nota
import User from '../models/user';



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