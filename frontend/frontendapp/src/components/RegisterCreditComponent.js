'use client'
import React, { useState, useEffect } from 'react';
import { Container, Grid, AppBar, Card, CardMedia, CardContent, TextField, Button, Box, Typography, Toolbar, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import '../styles/registercredit.css'; // o el path correcto de tu archivo CSS


const RegisterCreditComponent = () => {
  const [pageindex, setPageIndex] = useState(0);

  /* PAGE 0 */
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


  /* PAGE 1 */
  const [formData1, setFormData1] = useState({
    departamento: '',
    municipio: '',
    direccion: '',
    ingresosmensuales: '0.0',
  });

  const [errors1, setErrors1] = useState({
    departamento: '',
    municipio: '',
    direccion: '',
    ingresosmensuales: '',
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
      getPage1();
    }
  };


  const handleSubmit1 = (event) => {
    event.preventDefault();

    let validationErrors = {};
    let isValid = true;

    if (!formData1.departamento) {
      validationErrors.departamento = 'El departamento es requerido';
      isValid = false;
    }

    if (!formData1.municipio) {
      validationErrors.municipio = 'El municipio es requerido';
      isValid = false;
    }

    if (!formData1.direccion) {
      validationErrors.direccion = 'El direccion es requerido';
      isValid = false;
    }

    if (!formData1.ingresosmensuales) {
      validationErrors.ingresosmensuales = 'El direccion es requerido';
      isValid = false;
    }

    setErrors1(validationErrors);

    if (isValid) {
      // Aquí iría el código para procesar el formulario
      console.log('Formulario enviado');
      getPage2();
    }
  }

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

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData1,
      [name]: value,
    });
  };


  const getPage0 = () => {
    setPageIndex(0);
  };

  const getPage1 = () => {
    setPageIndex(1);
  };

  const getPage2 = () => {
    setPageIndex(2);
  };

  const DocumentUpload = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: 'image/*',
      onDrop: (files) => {
        // Aquí manejas los archivos subidos
        console.log(files);
      },
    });

    return (
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #ccc',
          borderRadius: '8px',
          height: '60%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 2, // margen superior para separarlo del Typography
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <Typography>¡Suelta la imagen aquí!</Typography>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/748/748107.png"
              alt="Icono de copiar archivo"
              style={{ width: 40, marginBottom: 8 }}
            />
            <Typography variant="body2" color="textSecondary">
              Arrastra aquí o selecciona archivo
            </Typography>
          </div>
        )}
      </Box>
    );
  };

  return (
    <Container sx={{
      width: '100%',
      height: {
        xs: '200px', // Teléfonos pequeños
        sm: '300px', // Tablets pequeñas
        md: '400px', // Tablets grandes
        lg: '500px', // Pantallas grandes
        xl: '600px', // Pantallas muy grandes

      },
      display: 'flex',
      mt: 1

    }}>
      {
        pageindex === 0 && (
          <Grid container spacing={3}>
            {/* Columna 1 */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Imagen azul */}
                <AppBar position="static"
                  sx={{
                    backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a57f/b6f5/d09df55185bc4fee2167b90f10d18288?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMAkWG~OzTxQNd5dzw7tUXdPGD4dlClO-vNOxLOUL9HERPPxBZ82HPYz9j9QVqY5MM9aSXPwg~cWuy1T996TjE3ExsA3KcF76NBCIliPhrPnFWdAHYs74u5GWxV~jITojTiy7kmZoMmD2ElKmNWlrYEA~a89iX957q9R8huMECMsKunu79pWFimpytKCI3jOmsVgOAi0t-6Ctdg07kaN48xf5awi9ne84bvoBLhAnJtIre8eOfF2Q4eSt8bAlIvFU-8DMeQz7O2snScsUvgwCF4X-GVT9gqes77Vp0jbOMPk6Q8frVLUkbNbCrMKvsXq7k~ueRO2i2tlfe4EUFyvnA__")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: { xs: 2, sm: 3, md: 4 }, // Padding ajustable según el tamaño de pantalla
                    width: '100%',
                    height: {
                      xs: '600px', // Teléfonos pequeños
                      sm: '400px', // Tablets pequeñas
                      md: '500px', // Tablets grandes
                      lg: '800px', // Pantallas grandes
                      xl: '800px', // Pantallas muy grandes
                    },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {/* Imagen centrada dentro del AppBar */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3651/2f6c/6b37477a40c72c4c8474921fde5e333c?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VDSGt3jnD34y04AVg5tWhAdvOxU~~wMPrHOEVc41kcH2FsJJfFDjULnGey3imUDlDSZ8JatGt0VIOHS209Z2V-a-QYA5wZ~vOW9aHg4rZUk54bvlqsxVGLd-omKvX2N3aMVImwlDYBEF8~5T25mzcfPWdo7MVKbBdq3UZwVPWPNii5Czp3K50YS-5ziTMDiRuImMfks2876vEWVCDjSs6dYZqeiIHX~jzxKHl95cG~xlJX-ldzKSJDpr9hHr4thuANn-jShohOfurYHoaa8E~qXmVgFTXRM~RMRkpOU0mbR3NWj0gHg6SnRNSM2Jp3TPEemdsHU22eaTdPJFu-8T3A__"
                      alt="Logo centrado"
                      style={{
                        maxWidth: '100%', // Limita el tamaño de la imagen
                        maxHeight: '100%', // Evita que la imagen sobresalga
                        objectFit: 'contain', // Mantiene la proporción de la imagen
                      }}
                    />
                    <Box sx={{ position: 'initial', width: '100vw', height: '100vh', display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}>
                      {/* Contenedor del ícono en forma de elipse */}
                      <Box
                        sx={{
                          position: 'absolute',
                          left: 3, // margen izquierdo para que no esté pegado al borde
                          top: '35%',
                          transform: 'translateY(-50%)',
                          width: 80,         // Ajusta el tamaño según necesites
                          height: 80,
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {/* Imagen del ícono */}
                        <img
                          src="https://s3-alpha-sig.figma.com/img/2963/5014/fc5d86ae449ee33a8497605771fd569d?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pb71EhnOSxVOrZ~RdV3aZRH7T2LrP3A~Ud4oXdcu16~vFMA8NeYdnTaI2pZeCuOKrYrXmJyof9Zme~jxpgE201V62ASsPafCChmO7PUbkSelEGqS1qvoJCrxUzlItBxX-18ZuZCpwy18WuNaSNQLq~aic3savz-X9muIp63trZ4oM41NXWnOrgfnnzC4C9c-zqz5Xon2LcbMkdM5pV6jcMXTjk9kaWIrbEc8VnLz3D5N98eQXWKarvLmX9owW64KkCMwqWrrQmkXZcY~~PQnZNZ5vmp4Sec9RMq7SBebuUUnXwANsfKyIhK8P5-G9lFYldebu1JyfeTHU5iW2cmjNw__"
                          alt="Icono elipse"
                          style={{
                            width: '50%',
                            height: '50%',
                            objectFit: 'contain'
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                </AppBar>
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
        )
      }

      {
        pageindex === 1 && (
          <form onSubmit={handleSubmit1}>
            <Grid container spacing={3}>
              <AppBar position="static"
                sx={{
                  backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a57f/b6f5/d09df55185bc4fee2167b90f10d18288?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMAkWG~OzTxQNd5dzw7tUXdPGD4dlClO-vNOxLOUL9HERPPxBZ82HPYz9j9QVqY5MM9aSXPwg~cWuy1T996TjE3ExsA3KcF76NBCIliPhrPnFWdAHYs74u5GWxV~jITojTiy7kmZoMmD2ElKmNWlrYEA~a89iX957q9R8huMECMsKunu79pWFimpytKCI3jOmsVgOAi0t-6Ctdg07kaN48xf5awi9ne84bvoBLhAnJtIre8eOfF2Q4eSt8bAlIvFU-8DMeQz7O2snScsUvgwCF4X-GVT9gqes77Vp0jbOMPk6Q8frVLUkbNbCrMKvsXq7k~ueRO2i2tlfe4EUFyvnA__")',
                  backgroundSize: 'auto',
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center',
                  padding: { xs: 1, sm: 2 },
                  width: '100%', // Asegurarse de que la barra ocupe todo el ancho
                }} />

              {/* Columna 1 */}

              <Grid item xs={12} md={6}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <img src="https://cdn.aglty.io/scotia-bank-mexico/digital-factory/images/brand-scotia/banner-brand-scotiabank.svg" alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
                </Toolbar>
                <Typography variant="h5" gutterBottom>
                  Datos de vivienda
                </Typography>

                <FormControl fullWidth margin="normal" error={!!errors1.departamento}>
                  <InputLabel>Departamento</InputLabel>
                  <Select
                    label="Departamento"
                    name="departamento"
                    value={formData1.departamento}
                    onChange={handleChange1}
                  >
                    <MenuItem value="">
                      <em>Seleccione</em>
                    </MenuItem>
                    <MenuItem value="Managua">Managua</MenuItem>
                    <MenuItem value="Matagalpa">Matagalpa</MenuItem>
                    <MenuItem value="Granada">Granada</MenuItem>
                  </Select>
                  {errors1.departamento && <FormHelperText>{errors1.departamento}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!errors1.municipio}>
                  <InputLabel>Municipio</InputLabel>
                  <Select
                    label="Municipio"
                    name="municipio"
                    value={formData1.municipio}
                    onChange={handleChange1}
                  >
                    <MenuItem value="">
                      <em>Seleccione</em>
                    </MenuItem>
                    <MenuItem value="Municipio1">Municipio1</MenuItem>
                    <MenuItem value="Municipio2">Municipio2</MenuItem>
                    <MenuItem value="Municipio3">Municipio3</MenuItem>
                  </Select>
                  {errors1.municipio && <FormHelperText>{errors1.municipio}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth margin="normal" error={!!errors1.direccion}>
                  <InputLabel>Municipio</InputLabel>
                  <Select
                    label="Direccion"
                    name="direccion"
                    value={formData1.direccion}
                    onChange={handleChange1}
                  >
                    <MenuItem value="">
                      <em>Seleccione</em>
                    </MenuItem>
                    <MenuItem value="Direccion1">Direccion1</MenuItem>
                    <MenuItem value="Direccion2">Direccion2</MenuItem>
                    <MenuItem value="Direccion3">Direccion3</MenuItem>
                  </Select>
                  {errors1.direccion && <FormHelperText>{errors1.direccion}</FormHelperText>}
                </FormControl>

                <TextField
                  label="Ingresos Mensuales"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="ingresosmensuales"
                  value={formData1.ingresosmensuales}
                  onChange={handleChange}
                  error={!!errors1.ingresosmensuales}
                  helperText={errors1.ingresosmensuales}
                />
              </Grid>
              {/* Columna 2*/}
              <Grid item xs={12} md={6}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', width: '100%' }} />

                <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  Fotografia de documento de identidad
                </Typography>
                <DocumentUpload />
                {/* Contenedor para los botones en una fila */}
                <Box sx={{ display: 'flex', gap: 2, mt: 2, justifyContent: 'flex-end', flexDirection: { xs: 'column', md: 'row' } }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'grey',
                      color: '#fff',
                      borderRadius: 0, // Botón rectangular
                      '&:hover': { backgroundColor: 'darkgrey' }
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'orange',
                      color: '#fff',
                      borderRadius: 0, // Botón rectangular
                      '&:hover': { backgroundColor: 'darkorange' }
                    }}
                  >
                    Continuar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        )
      }

    </Container>
  );
};

export default RegisterCreditComponent;