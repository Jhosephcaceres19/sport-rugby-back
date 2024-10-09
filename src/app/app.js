const express = require("express");

const app = express()
const usuarioRoutes = require ('./routes/usuario');
const codigoRoutes = require ('./routes/codigo');
const diagramaRoutes = require('./routes/diagrama');
const lenguajeRoutes = require('./routes/lenguaje');

app.use(express.json());
app.use('/api',usuarioRoutes);

app.use('/api',codigoRoutes);

app.use('/api',diagramaRoutes);

app.use('/api',lenguajeRoutes);

app.get('/', (req, res) =>{
    res.send('este es mi backend')
})

module.exports = app;