const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// BFF de la app móvil: valida el token de sesión del cliente.
app.use((req, res, next) => {
  const t = req.headers.authorization;
  try { req.user = jwt.verify(t, process.env.SECRET); next(); }
  catch { res.status(401).end(); }
});

app.listen(4000);
