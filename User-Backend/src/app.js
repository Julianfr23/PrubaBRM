// src/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');   

dotenv.config();

const app = express();

/* ----------  Middlewares globales ---------- */
app.use(cors());
app.use(express.json());

/* ----------  Rutas de la API --------------- */
app.use('/api/users', userRoutes);

/* ----------  Documentación Swagger ---------- */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* ----------  Ruta de salud ------------------ */
app.get('/', (_req, res) => res.send('✅ API corriendo correctamente'));

module.exports = app;
