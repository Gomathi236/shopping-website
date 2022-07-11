// var mysql = require('mysql2');

// var pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "shopping website",
//   password: "root"
// });

// module.exports = pool.promise();


//using sequelize

const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping website', 'root', 'root',{
    host :'localhost',
    dialect: 'mysql'
})


module.exports = sequelize;