import express from 'express';

const router = express.Router();
import User from '../models/user';
import Articulo from '../models/articulo';
import Carrito from '../models/carrito'

router.post('/crear-carrito', async(req, res) => {
    const fs = req.body;
    const user = await User.finndOne(body);
})



module.exports = router;