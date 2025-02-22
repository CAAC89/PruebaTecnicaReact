var express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/usermodel');
const authenticateToken = require('../middleware/auth');
const morgan = require('morgan'); // Importar Morgan
const jwt = require('jsonwebtoken');
require('dotenv').config();
var router = express.Router();


// Aplicar logs solo a estas rutas
router.use(morgan('combined')); // Aplica logs detallados a todas las rutas de users


// Ruta para obtener el token (login simulado)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulación de autenticación (puedes validar contra una base de datos real)
  if (username === 'admin' && password === '1234') {
    const user = { username: username };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generar token válido por 1 hora
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

// Crear usuario
router.post('/',
  authenticateToken,
  [
    body('correo').isEmail(),
    body('telefono').isLength({ min: 7 }),
    body('ingresosMensuales').isNumeric()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Error al crear el usuario', error: err });
    }
  }
);

// Leer todos los usuarios
router.get('/', authenticateToken, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

// Leer usuario por ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener el usuario' });
  }
});

// Actualizar usuario
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
});

// Eliminar usuario
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
});

module.exports = router;
