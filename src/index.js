// iniciamos el módulo express con el fin de dar inicio al servidor, evitando varias configuraciones 
const express = require('express');
const app = express();
const mongoose = require("mongoose");

// Importar ruta de usuario
const userRoutes = require("./routes/user");

require("dotenv").config();

// Se configura cómo va a escuchar el servidor las peticiones 
const port = process.env.PORT || 9000;
app.listen(port, () => console.log('Servidor ok', port));

//middleware
app.use(express.json());
app.use('/api',userRoutes);


// Se crea una ruta 
app.get("/",(req,res)=> {
    res.send("API en construcción")

});

// Conexión a la Base de datos
mongoose.connect(process.env.BDMONGO_URI)
.then(()=> console.log("Conexión establecida"))
.catch((error)=> console.log(error));
