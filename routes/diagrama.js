const express = require('express');
const router = express.Router();
const {diagrama} = require('../models');

//Obtener todos los diagramas
router.get('/diagrama', async (req, res) => {
    try{
        const diagramas = await diagrama.findAll();
        res.json(diagramas);
    } catch (error) {
        res.status(500).json({error: 'Ocurrió un error al obtener los diagramas'});
    }
});

//Obtener un diagrama por id
router.get('/diagrama/:id', async (req, res) => {
    try{
        const diagrama = await diagrama.findByPk(req.params.id);
        if (diagrama) {
            res.json(diagrama);
        } else {
            res.status(404).json({ error: 'Diagrama no encontrado' });
        }
    } catch {
        res.status(500).json({ error: 'Ocurrió un error al obtener el diagrama deseado' });
    }
});

//Crear un nuevo diagrama
router.post('/diagrama', async (req, res) => {
    try{
        const nuevoDiagrama = await diagrama.create(req.body);
        res.status(201).json(nuevoDiagrama);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear el Diagrama'});
    }
});

//Actualizar un diagrama existente
router.put('/diagrama/:id', async (req, res) => {
    try{
        const diagrama = await diagrama.findByPk(req.params.id);
        if(diagrama) {
            await diagrama.update(req.body);
            res.json(diagrama);
        } else {
            res.status(404).json({ error: 'Diagrama no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al actualizar el Diagrama'})
    }
});

//Eliminar un diagrama
router.delete('/diagrama:id', async (req, res) => {
    try{
        const diagrama = await diagrama.findByPk(req.params.id);
        if (diagrama) {
            await diagrama.destroy();
            res.json({ message: 'Diagrama eliminado'});
        } else {
            res.status(404).json({ error: 'Diagrama no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al eliminar el diagrama'});
    }
});

module.exports = router;
