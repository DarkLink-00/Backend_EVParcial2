const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Videojuego = new Schema({
    nombre:{
        type:String
    },
    genero:{
        type:String
    },
    costo:{
        type:Number
    },
    autor:{
        type:String
    },
    comentario:{
        type:String
    }
},{
    collection: 'videojuegos'
})

module.exports = mongoose.model('Videojuego',Videojuego)