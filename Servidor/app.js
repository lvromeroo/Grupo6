// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// //Para acceder al directorio actual
// const path = require('path');

// Con babel ahora se pueden importar
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Conexión base de datos
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/myapp';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to
   mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
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
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// }); // Especificacion de una ruta

app.use('/api', require('./routes/nota'));


// Middleware para  Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
//app.use(express.static(path.join(__dirname, 'public')));


//puerto
// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// }); //Establecer un puerto (es estatico)

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port 3000!');
}); // Generar puerto de manera automatica (es dinamico)