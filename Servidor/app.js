import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin_eniac:eniac123@eniac.cokmc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) }
   ); // Se verifica si se tiene conexion a la base de datos


//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended:true }))

// //ruta

app.use('/api', require('./routes/Articulo'));
app.use('/api', require('./routes/user'));


// Middleware para  Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port 3000!');
}); // Generar puerto de manera automatica (es dinamico)