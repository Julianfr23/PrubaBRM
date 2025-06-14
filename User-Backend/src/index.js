// src/index.js
const connectDB = require('./config/db');
const app = require('./app');

connectDB();                               // ← conecta a Mongo una sola vez

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
