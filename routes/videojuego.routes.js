const express = require('express')
const videojuegoRouter = express.Router()

//se declara el objeto del modelo
let videojuego = require('../models/videojuego')

//agregar un videojuego nuevo con método post
videojuegoRouter.route('/agregar').post((req,res)=>{
    videojuego.create(req.body)
    .then((data)=>{
        console.log('Se insertó el videojuego')
        res.send(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})

//obtener todos los videojuegos de la base de datos con método get
videojuegoRouter.route('/videojuegos').get((req,res)=>{
    videojuego.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtener un solo videojuego (por ID)
videojuegoRouter.route('/videojuego/:id').get((req,res)=>{
    videojuego.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//actualizar videojuego
videojuegoRouter.route('/actualizar/:id').put((req,res)=>{
    videojuego.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//eliminar videojuego
videojuegoRouter.route('/delete/:id').delete((req,res)=>{
    videojuego.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se eliminó el videojuego')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

module.exports = videojuegoRouter;