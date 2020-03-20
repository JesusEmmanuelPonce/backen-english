const Sequelize = require("sequelize");
const db = new Sequelize("heroku_09c96e5c4db2796", "b3018588af6e15", "6a403cf2", {
  host: "us-cdbr-iron-east-04.cleardb.net",
  dialect: "mysql",
  port: "3306",
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;

//Develop
// const Sequelize = require("sequelize");
// const db = new Sequelize("english_pb", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   port: "3306",
//   define: {
//     timestamps: false
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

// module.exports = db;