const Cliente = require("../model/Cliente");

module.exports.mostrar = (req, res) => {
    Cliente.find({}, (error, clientes) => {
        if (error) {
            return res.status(500).json({
                message: "Error mostrando los clientes"
            });
        }
        res.render("index", { clientes: clientes }); // Cambiado para mostrar los clientes
    });
};

module.exports.crear = (req, res) => {
    console.log(req.body); // Para verificar que los datos se reciben correctamente
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
};
