const express = require('express');
const router = express.Router();
const {lenguaje} = require('../models');

//Obtener todos los lenguajes
router.get('/lenguaje', async (req, res) => {
    try{
        const lenguajes = await lenguaje.findAll();
        res.json(lenguajes);
    } catch (error) {
        res.status(500).json({error: 'Ocurrió un error al obtener los lenguajes'});
    }
});

//Obtener un lenguaje por id
router.get('/lenguaje/:id', async (req, res) => {
    try{
        const lenguaje = await lenguaje.findByPk(req.params.id);
        if (lenguaje) {
            res.json(lenguaje);
        } else {
            res.status(404).json({ error: 'Lenguaje no encontrado' });
        }
    } catch {
        res.status(500).json({ error: 'Ocurrió un error al obtener el lenguaje deseado' });
    }
});

//Crear un nuevo lenguaje
router.post('/lenguaje', async (req, res) => {
    try{
        const nuevoLenguaje = await lenguaje.create(req.body);
        res.status(201).json(nuevoLenguaje);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear el Lenguaje'});
    }
});

//Actualizar un lenguaje existente
router.put('/lenguaje/:id', async (req, res) => {
    try{
        const lenguaje = await lenguaje.findByPk(req.params.id);
            if(lenguaje) {
                await lenguaje.update(req.body);
                res.json(lenguaje);
            } else {
                res.status(404).json({ error: 'Lenguaje no encontrado'});
            }
        } catch (error) {
            res.status(500).json({ error: 'Ocurrió un error al actualizar el Lenguaje'})
        }
    });
    
    //Eliminar un lenguaje
    router.delete('/lenguaje/:id', async (req, res) => {
        try{
            const lenguaje = await lenguaje.findByPk(req.params.id);
            if (lenguaje) {
                await lenguaje.destroy();
                res.json({ message: 'Lenguaje eliminado'});
            } else {
                res.status(404).json({ error: 'Lenguaje no encontrado'});
            }
        } catch (error) {
            res.status(500).json({ error: 'Ocurrió un error al eliminar el lenguaje'});
        }
    });
    
    module.exports = router;