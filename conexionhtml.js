//conexion html para sitio web
const express = require('express');
const path = require('path');
const app = express();

// Ruta para servir el archivo HTML estático (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
