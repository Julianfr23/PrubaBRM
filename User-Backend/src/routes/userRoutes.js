const express = require('express');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/userController');

// Crear un nuevo usuario
router.post('/', crearUsuario);

// Obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Obtener un usuario por ID
router.get('/:id', obtenerUsuarioPorId);

// Actualizar un usuario por ID
router.put('/:id', actualizarUsuario);

// Eliminar un usuario por ID
router.delete('/:id', eliminarUsuario);

module.exports = router;
