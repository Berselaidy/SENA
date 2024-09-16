const express = require('express');
const router = express.Router();
const userSchema = require("../models/user");

// Crear usuarios
router.post ("/users",(req, res)=> {
    const user = userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensage: error}));
});

//obtener todos los usuarios
router.get ("/users",(req,res)=> {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensage: error}));
});

// Mostrar un usuario en específico
router.get ("/users/:id",(req,res)=> {
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensage: error}));
});

//Actualizar usuario
router.put ("/users/:id",(req,res)=> {
    const {id} = req.params;
    const { Correo_electronico, Contraseña, Nombre, Apellidos, Telefono } = req.body;
    userSchema
    .updateOne({_id: id }, {$set: { Correo_electronico, Contraseña, Nombre, Apellidos, Telefono }})
    .then((data) => res.json(data))
    .catch((error) => res.report.json({mensage: error}));
});

//Eliminar usuario
router.delete ("/users/:id",(req,res)=> {
    const {id} = req.params;
    userSchema
    .deleteOne({_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.report.json({mensage: error}));
});

module.exports = router 