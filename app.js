const express = require('express');
const app = express();
const Cliente = require('./model/Cliente'); // Asegúrate de ajustar la ruta al modelo si es necesario
const clienteController = require('./controllers/clienteController'); // Asegúrate de importar el controlador


const db = require('./bd'); 

app.set("view engine", "ejs");
app.set('views', './views');

app.use(express.urlencoded({ extended:true}))
app.use(express.json());

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.get("/clientes", (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(500).json({
                message: "Error mostrando los clientes"
            });
        }
        res.render("index", { clientes: clientes });
    });
});

app.post("/crear",(req,res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos, // Asegúrate de que este campo se llama 'apellidos'
        direccion: req.body.direccion
    });

    cliente.save((error) => {
        if (error) {
            return res.status(500).json({
                message: "Error creando el cliente"
            });
        }
        res.redirect("/clientes");
    });
});


app.listen(4000, ( ) =>{
    console.log("Server api en http://localhost:4000");
})