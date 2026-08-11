const sqlite3 = require('sqlite3').verbose();
const path = require('path');
 
const DB_PATH = path.join(__dirname, '..', '..', 'database', 'torneo_volleyball.db');
 
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a torneo_volleyball.db');
    db.run('PRAGMA foreign_keys = ON;');
  }
});
 
module.exports = db;