var express = require('express');
var router = express.Router();

/* Connection DB*/
var connection = require ('../database/db.js');
/*Selection table DB and results err connection*/
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', (error, results)=>{
    if (error) {
       throw error;
    }else{
      res.render('index', {results:results});
    }
  });
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Crud' });
});

/* GET Seccion (nosotros.ejs) */
router.get('/contacto', function(req, res, next) {
  res.render('Contacto', { title: 'Contactenos' });
});

module.exports = router;
