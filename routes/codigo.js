const express = require('express');
const router = express.Router();
const {codigo} = require('../models');

//Obtener todos los códigos
router.get('/codigo', async (req, res) => {
    try{
        const codigos = await codigo.findAll();
        res.json(codigos);
    } catch (error) {
        res.status(500).json({error: 'Ocurrió un error al obtener los códigos'});
    }
});

//Obtener un código por id
router.get('/codigo/:id', async (req, res) => {
    try{
        const codigo = await codigo.findByPk(req.params.id);
        if (codigo) {
            res.json(codigo);
        } else {
            res.status(404).json({ error: 'Código Fuente no encontrado' });
        }
    } catch {
        res.status(500).json({ error: 'Ocurrió un error al obtener el código deseado' });
    }
});

//Crear un nuevo código
router.post('/codigo', async (req, res) => {
    try{
        const nuevoCodigo = await codigo.create(req.body);
        res.status(201).json(nuevoCodigo);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear el Código'});
    }
});

//Actualizar un código existente
router.put('/codigo/:id', async (req, res) => {
    try{
        const codigo = await codigo.findByPk(req.params.id);
        if(codigo) {
            await codigo.update(req.body);
            res.json(codigo);
        } else {
            res.status(404).json({ error: 'Código no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al actualizar el Código'})
    }
});

//Eliminar un usuario
router.delete('/codigo/:id', async (req, res) => {
    try{
        const codigo = await codigo.findByPk(req.params.id);
        if (codigo) {
            await codigo.destroy();
            res.json({ message: 'Código eliminado'});
        } else {
            res.status(404).json({ error: 'Código no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al eliminar el código'});
    }
});

module.exports = router;