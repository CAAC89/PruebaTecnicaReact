'use client'
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Button,
  Modal,
  Box,
  Grid2,
  Divider
} from '@mui/material';



import '../styles/getcredit.css'; // o el path correcto de tu archivo CSS


const GetCreditComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  // Funciones para abrir y cerrar el modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // Datos de ejemplo
  const rows = [
    { _id: 1, nombres: 'Juan', apellidos: 'Perez', correoElectronico: 'juan.perez@example.com', numeroTelefono: '1234567890' },
    { _id: 2, nombres: 'Ana', apellidos: 'Gonzales', correoElectronico: 'ana.gonzalez@example.com', numeroTelefono: '0987654321' },
    { _id: 3, nombres: 'Luis', apellidos: 'Ramirez', correoElectronico: 'luis.ramirez@example.com', numeroTelefono: '1122334455' },
    { _id: 4, nombres: 'María', apellidos: 'Fernandez', correoElectronico: 'maria.fernandez@example.com', numeroTelefono: '6677889900' },
    { _id: 5, nombres: 'Carlos', apellidos: 'Lopez', correoElectronico: 'carlos.lopez@example.com', numeroTelefono: '5566778899' },
    { _id: 6, nombres: 'Laura', apellidos: 'Martinez', correoElectronico: 'laura.martinez@example.com', numeroTelefono: '4433221100' },
  ];

  // Convertir las llaves del objeto en un array
  const keys = Object.keys(rows);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      {/* Header con imagen */}
      <AppBar position="static"
        sx={{
          backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/a57f/b6f5/d09df55185bc4fee2167b90f10d18288?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VMAkWG~OzTxQNd5dzw7tUXdPGD4dlClO-vNOxLOUL9HERPPxBZ82HPYz9j9QVqY5MM9aSXPwg~cWuy1T996TjE3ExsA3KcF76NBCIliPhrPnFWdAHYs74u5GWxV~jITojTiy7kmZoMmD2ElKmNWlrYEA~a89iX957q9R8huMECMsKunu79pWFimpytKCI3jOmsVgOAi0t-6Ctdg07kaN48xf5awi9ne84bvoBLhAnJtIre8eOfF2Q4eSt8bAlIvFU-8DMeQz7O2snScsUvgwCF4X-GVT9gqes77Vp0jbOMPk6Q8frVLUkbNbCrMKvsXq7k~ueRO2i2tlfe4EUFyvnA__")',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          padding: { xs: 1, sm: 2 },
          width: '100%', // Asegurarse de que la barra ocupe todo el ancho
        }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <img src="https://cdn.aglty.io/scotia-bank-mexico/digital-factory/images/brand-scotia/banner-brand-scotiabank.svg" alt="Logo" style={{ width: 40, height: 40, marginRight: 16 }} />
        </Toolbar>

      </AppBar>

      <Typography variant="h6" component="div" className="title-table" sx={{ marginTop: 4, margin: '1%' }}>
        Historial de registro
      </Typography>

      {/* Tabla con paginación */}
      <TableContainer component={Paper} sx={{ marginTop: 4, maxWidth: '90%', margin: '5%' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="header-table-titles" sx={{ color: 'GrayText' }}>Nombre y Apellidos</TableCell>
              <TableCell className="header-table-titles" sx={{ color: 'GrayText' }}>Correo Electrónico</TableCell>
              <TableCell className="header-table-titles" sx={{ color: 'GrayText' }}>Número Telefónico</TableCell>
              <TableCell className="header-table-titles" sx={{ color: 'GrayText' }}> Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.nombres.concat(" ").concat(row.apellidos)}</TableCell>
                <TableCell sx={{ color: 'GrayText' }}>{row.correoElectronico}</TableCell>
                <TableCell sx={{ color: 'GrayText' }}>{row.numeroTelefono}</TableCell>
                <TableCell>
                  <Button onClick={handleOpen} className='action'
                    style={{ textDecoration: 'underline', textTransform: 'none' }}>
                    Ver detalle
                  </Button>

                  {/* Modal */}
                  <Modal open={open} onClose={handleClose}
                    BackdropProps={{
                      sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo totalmente transparente
                      },
                    }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        p: 4,
                        borderRadius: 2,
                        width: '80%',
                        height: '80%',
                        border: '2px solid #B0B0B0', // Borde gris
                      }}
                    >
                      {/* Botón de cierre en la esquina superior derecha */}
                      <IconButton
                        onClick={handleClose}
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          color: 'text.secondary', // Color de la "X"
                        }}
                      >
                        X
                      </IconButton>
                      {/* Contenido del modal */}
                      <Grid2 container spacing={2}>
                        {/* Fila 1: Una imagen en la primera columna */}
                        <Grid2 xs={6}>
                          <img src="/sco.png" alt="Imagen 1" style={{ width: '100%', height: 'auto' }} />
                        </Grid2>

                        <Grid2 container spacing={2}>
                          <Grid2 xs={6}>
                            <Grid2 container direction="row">
                              CARLOS ARGUELLO
                            </Grid2>
                            <Grid2 container direction="row">
                              <Grid2 xs={6}>
                                {/* Fila 1 */}
                                <Grid2 container direction="column">
                                  <Grid2 >
                                    <Typography variant="body2" fontWeight="bold">Llave 1:</Typography>
                                  </Grid2>
                                  <Grid2 >
                                    <Typography variant="body2">Valor 1</Typography>
                                  </Grid2>
                                </Grid2>

                                {/* Fila 2 */}
                                <Grid2 container direction="column">
                                  <Grid2 >
                                    <Typography variant="body2" fontWeight="bold">Llave 2:</Typography>
                                  </Grid2>
                                  <Grid2 >
                                    <Typography variant="body2">Valor 2</Typography>
                                  </Grid2>
                                </Grid2>

                                {/* Fila 3 */}
                                <Grid2 container direction="column">
                                  <Grid2 >
                                    <Typography variant="body2" fontWeight="bold">Llave 3:</Typography>
                                  </Grid2>
                                  <Grid2 >
                                    <Typography variant="body2">Valor 3</Typography>
                                  </Grid2>
                                </Grid2>

                                {/* Fila 4 */}
                                <Grid2 container direction="column">
                                  <Grid2 >
                                    <Typography variant="body2" fontWeight="bold">Llave 4:</Typography>
                                  </Grid2>
                                  <Grid2 >
                                    <Typography variant="body2">Valor 4</Typography>
                                  </Grid2>
                                </Grid2>
                              </Grid2>
                              
                            </Grid2>
                          </Grid2>
                        </Grid2>
                        {/* Divider para separar filas */}
                        <Divider sx={{ width: '100%', mt: 2 }} />

                        {/* Fila 2: Dos imágenes */}
                        <Grid2 container spacing={2}>
                          <Grid2 xs={12} sm={6}>
                            <img
                              src="https://via.placeholder.com/100"
                              alt="Imagen 2"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Grid2>

                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                          />

                          <Grid2 xs={12} sm={6}>
                            <img
                              src="https://via.placeholder.com/100"
                              alt="Imagen 3"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </Grid2>
                        </Grid2>
                      </Grid2>
                    </Box>
                  </Modal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  )
};

export default GetCreditComponent;