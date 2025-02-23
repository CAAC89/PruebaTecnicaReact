'use client'
import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Box, Typography, Toolbar, FormControl, InputLabel, Select, MenuItem , FormHelperText} from '@mui/material';
import Image from 'next/image';

import '../styles/registercredit.css'; // o el path correcto de tu archivo CSS


const RegisterCreditComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    tipoIdentificacion: '',
    numeroIdentificacion: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let validationErrors = {};
    let isValid = true;

    // Validación de los campos
    if (!formData.nombre) {
      validationErrors.nombre = 'El nombre es requerido';
      isValid = false;
    }
    if (!formData.apellido) {
      validationErrors.apellido = 'El apellido es requerido';
      isValid = false;
    }
    if (!formData.correo) {
      validationErrors.correo = 'El correo es requerido';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      validationErrors.correo = 'Correo no válido';
      isValid = false;
    }
    if (!formData.telefono) {
      validationErrors.telefono = 'El número de teléfono es requerido';
      isValid = false;
    }
    if (!formData.tipoIdentificacion) {
      validationErrors.tipoIdentificacion = 'El tipo de identificación es requerido';
      isValid = false;
    }
    if (!formData.numeroIdentificacion) {
      validationErrors.numeroIdentificacion = 'El número de identificación es requerido';
      isValid = false;
    }

    setErrors(validationErrors);
    if (isValid) {
      // Aquí iría el código para procesar el formulario
      console.log('Formulario enviado');
    }
  };

  // Definición del regex para validar números de Nicaragua y Costa Rica
  const phoneRegex = /^[2-8]{1}[0-9]{3}-?[0-9]{4}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'telefono' && !phoneRegex.test(value)) {
      setErrors({
        ...errors,
        telefono: 'Número de teléfono no válido. El formato debe ser XXX-XXXX o XXXXXXXXXX.',
      });
    } else {
      setErrors({
        ...errors,
        telefono: '',
      });
    }
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Columna 1 */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Imagen azul */}
          </Box>
        </Grid>

        {/* Columna 2 */}
        <Grid item xs={12} md={6}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <img src="https://cdn.aglty.io/scotia-bank-mexico/digital-factory/images/brand-scotia/banner-brand-scotiabank.svg" alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
          </Toolbar>
          <Typography variant="h5" gutterBottom>
            Registro
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              error={!!errors.nombre}
              helperText={errors.nombre}
            />
            <TextField
              label="Apellido"
              variant="outlined"
              fullWidth
              margin="normal"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              error={!!errors.apellido}
              helperText={errors.apellido}
            />
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              error={!!errors.correo}
              helperText={errors.correo}
              type="email"
            />
            <TextField
              label="Número de Teléfono"
              variant="outlined"
              fullWidth
              margin="normal"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              error={!!errors.telefono}
              helperText={errors.telefono}
              type="tel"
              inputProps={{
                pattern: "^[2-8]{1}[0-9]{3}-?[0-9]{4}$", // Regex para validar Nicaragua y Costa Rica
              }}
            />
            <FormControl fullWidth margin="normal" error={!!errors.tipoIdentificacion}>
              <InputLabel>Tipo de Identificación</InputLabel>
              <Select
                label="Tipo de Identificación"
                name="tipoIdentificacion"
                value={formData.tipoIdentificacion}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccione</em>
                </MenuItem>
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                <MenuItem value="ID">Cédula de Identidad</MenuItem>
              </Select>
              {errors.tipoIdentificacion && <FormHelperText>{errors.tipoIdentificacion}</FormHelperText>}
            </FormControl>
            <TextField
              label="Número de Identificación"
              variant="outlined"
              fullWidth
              margin="normal"
              name="numeroIdentificacion"
              value={formData.numeroIdentificacion}
              onChange={handleChange}
              error={!!errors.numeroIdentificacion}
              helperText={errors.numeroIdentificacion}
            />
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{
                marginTop: 2,
                width: '100%',
                height: 40,
                minWidth: 120,
                borderRadius: 0.5,
                backgroundColor: '#FF5C00',
              }}
            >
              Continuar
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterCreditComponent;