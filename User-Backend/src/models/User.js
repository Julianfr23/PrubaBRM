const mongoose = require('mongoose');
//Esquema de los datos que almacena la base de datos de cada Usuario
//Recordar que MongoDB automaticamente añade un ID por eso no es necesario incluirlo 
const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    edad: {
        type: Number,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
}, {
    timestamps: true // agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('User', userSchema);
