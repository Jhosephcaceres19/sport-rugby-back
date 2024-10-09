const express = require('express');
const router = express.Router();
const {usuario} = require('../models/usuario');

//Obtener todos los usuarios
router.get('/', async (req, res) => {
    try{
        const usuarios = await usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: 'Ocurrió un error al obtener los usuarios'});
    }
});

//Obtener un usuario por id
router.get('/usuario/:id', async (req, res) => {
    try{
        const usuario = await usuario.findByPk(req.params.id);
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch {
        res.status(500).json({ error: 'Ocurrió un error al obtener el usuario deseado' });
    }
});

//Crear un nuevo usuario
router.post('/usuario', async (req, res) => {
    try{
        const nuevoUsuario = await usuario.create(req.body);
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al crear el usuario'});
    }
});

//Actualizar un usuario existente
router.put('/usuario/:id', async (req, res) => {
    try{
        const usuario = await usuario.findByPk(req.params.id);
        if(usuario) {
            await usuario.update(req.body);
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al actualizar el usuario'})
    }
});

//Eliminar un usuario
router.delete('/usuario/:id', async (req, res) => {
    try{
        const usuario = await usuario.findByPk(req.params.id);
        if (usuario) {
            await usuario.destroy();
            res.json({ message: 'Usuario eliminado'});
        } else {
            res.status(404).json({ error: 'Usuario no encontrado'});
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al eliminar el usuario'});
    }
});

module.exports = router;