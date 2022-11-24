// letn=5
// let string=" ";
// for (let i=1; i<=n; i++){
//     for (let j=n; j>i ;j--){
//         string+=" ";

//     }
//     for (let k=0 ; k<i*2-1; k++ ){

//     string+="*";
//     }
//     string="\n";

// }
// console.log(string)


const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "srushti@123",
})

db.connect(function(err){
    if (err) throw err;
    console.log("connected")
})
db.query("CREATE DATABASE blog",function(err,result){
    if (err){
        console.log("Database alredy created");
    }
    else{
        console.log("Database created")
    }
});
