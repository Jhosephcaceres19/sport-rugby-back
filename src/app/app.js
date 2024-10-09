const express = require("express");
const cors = require('cors');
const app = express()
const usuarioRoutes = require ('../../routes/usuario');
const codigoRoutes = require ('../../routes/codigo');
const diagramaRoutes = require('../../routes/diagrama');
const lenguajeRoutes = require('../../routes/lenguaje');

app.use(cors());
app.use(express.json());
app.use('/api/usuario',usuarioRoutes);

app.use('/api/codigo',codigoRoutes);

app.use('/api/diagrama',diagramaRoutes);

app.use('/api/lenguaje',lenguajeRoutes);

app.get('/', (req, res) =>{
    res.send('este es mi backend')
})

module.exports = app;