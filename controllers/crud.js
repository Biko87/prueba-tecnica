/* Connection DB*/
var connection = require ('../database/db.js');

/* Save data*/
exports.save = (req,res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    connection.query('INSERT INTO users SET ?', {user:user, rol:rol}, (err, results)=>{
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
}