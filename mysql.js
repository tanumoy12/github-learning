var mysql = require('mysql')
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mynode',
})
con.connect(function(error){
    if(error) throw error;
    con.query("select * from product",function(err,result){
        if(err) throw err
        console.log("all results are here",result[1].name)
    })
})