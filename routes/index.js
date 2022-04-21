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


/*Route create register*/
router.get('/create', function(req, res, next) {
  res.render('create');
});

/*Route Edit Register*/
router.get('/edit/:id', (req, res)=>{
  const id = req.params.id;
  connection.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
    if (error) {
       throw error;
    }else{
      res.render('edit', {user:results[0]});
    }
  });
})

/*Route Delete Data*/
router.get('/delete/:id', (req, res)=>{
  const id = req.params.id;
  connection.query('DELETE FROM users WHERE id=?',[id], (error, results)=>{
    if (error) {
       throw error;
    }else{
      res.redirect('/');
    }
  });
})


const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
