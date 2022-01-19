const mysql = require("mysql")
const Database = new mysql.createConnection({
    host: "37267",
    user: "root",
    password: "",
    database: "Asto-Bot"
})

Database.connect(function(err) {

    if(err) throw err;

    console.log("La base de données a été connectée avec succès !")
})

module.exports = Database;