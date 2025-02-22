const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  telefono: { type: String, required: true },
  tipoIdentificacion: { type: String, required: true },
  numeroIdentificacion: { type: String, required: true, unique: true },
  departamento: { type: String, required: true },
  municipio: { type: String, required: true },
  direccion: { type: String, required: true },
  ingresosMensuales: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('users', userSchema);