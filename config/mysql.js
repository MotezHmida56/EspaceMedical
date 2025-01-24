const mysql = require('mysql');



// Connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'Medical'
});

// Établir la connexion à MySQL


// Exemple de requête MySQL pour tester la connexion
connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) {
    console.error('Erreur lors de la requête :', err);
  } else {
    console.log('La solution est :', rows[0].solution);
  }
});

// Route de base
app.get('/', (req, res) => {
  res.send('Hello ehdeuf!');
});
app.post

// Route d'exemple pour récupérer des données depuis MySQL
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM your_table_name', (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des données', error: err });
    } else {
      res.json(rows);
    }
  });
});