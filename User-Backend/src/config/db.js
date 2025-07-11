const mongoose = require('mongoose');

//Funcion para conectarse a la base de datos 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a la base de datos MongoDB');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    process.exit(1); // Finaliza el proceso si falla
  }
};

module.exports = connectDB;