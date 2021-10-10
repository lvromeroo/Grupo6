import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const engine = require('ejs-mate');
const multer = require('multer');
const uuid = require ('uuid').v4;



const app = express();

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/eniac';
const options = {useNewUrlParser: true, useUnifiedTopology: true};


//usando promesas
mongoose.connect(uri, options).then(
    () =>{console.log('conectada base de datos')},
    err => {console.log(err)}
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));// en la documentacion estaba true
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) =>{
        cb(null, uuid() + path.extname(file.originalname));
    }
});

app.use(multer({ storage: storage}).single('image'));
//motor de plantillas
// app.search('views', path.join(__dirname, 'views'));
// app.engine("ejs", engine);
// app.set('view engine', 'ejs');



//rutas
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/articulo'));

// middleware para vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public'))); // se puede modificar debido a que public no será la unica direccion




//puerto
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function() {
    console.log('app listening on por '+ app.get('puerto'));
});







