const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    Correo_electronico:{
        type: String,
        required: true
    },
    Contraseña:{
        type: String,
        required: true
    },
    Nombre:{
        type: String,
        required: true 
    },
    Apellidos:{
        type: String,
        required: true 
    },
    Telefono:{
        type: String,
        required: true 
    },
});

module.exports = mongoose.model('user', userSchema);