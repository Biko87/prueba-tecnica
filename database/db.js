const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_nodejs_db'
})

connection.connect((err)=>{
    if (err) {
        console.log('No esta conectado a la DB'+err);
        return       
    }
    console.log('¡Conectado a la DB!');
})

module.exports = connection;