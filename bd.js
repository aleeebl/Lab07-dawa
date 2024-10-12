const mongoose = require('mongoose');
const url = "mongodb://localhost/data";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error al conectar a MongoDB"));
db.once("open", () => {
    console.log("Conectado a la base de datos");
});

module.exports = db; // Exporta el objeto db correctamente
