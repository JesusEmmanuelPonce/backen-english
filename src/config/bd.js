// const Sequelize = require("sequelize");
// const db = new Sequelize("heroku_7e14bd8bbf9f627", "b9206664ccc349", "e621522e", {
//   host: "us-cdbr-iron-east-05.cleardb.net",
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

//Develop
const Sequelize = require("sequelize");
const db = new Sequelize("english_pb", "root", "", {
  host: "localhost",
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