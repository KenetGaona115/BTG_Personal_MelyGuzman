//package para servidor 
const express = require('express');
//package para obtener la ruta de los archivos
const path = require('path');
//inicializa la pagina
const app = express();
//configuracion inicial
app.listen(process.env.PORT || 3000, () => console.log('Listening'));
//Ubicaion de los archivos de html de Angular
app.use(express.static(path.join(__dirname, 'public/archivos/')))
app.use(express.json());

module.exports = app;
