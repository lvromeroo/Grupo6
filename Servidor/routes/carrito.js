import express from 'express';

const router = express.Router();
import User from '../models/user';

router.post('/crear-carrito', async(req, res) => {
    const fs = req.body;
    const user = await User.finndOne(body);
})



module.exports = router;