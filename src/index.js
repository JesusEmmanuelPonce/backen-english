const express = require("express");
const app = express();
const routes = require("./routes/router");

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//Connect db 
const db = require("./config/bd");

//Models
// require("./models/vehicles");
require("./models/phrases");

// Create DB
db.sync()
  .then(() => console.log("conectado"))
  .catch(error => console.log(error));


//Settings PORT
app.set("port", process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Routes
app.use("/", routes());

//Server
app.listen(app.get("port"), () => {
    console.log("On port");
})