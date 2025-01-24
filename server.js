const express = require('express');
const app = express();
const port = 3095;
const cors = require("cors"); // Sécurise les requêtes entre serveur et client


// Démarrer le serveur Express
app.listen(port, () => {
  console.log(`App écoutant sur le port ${port}`);
});
