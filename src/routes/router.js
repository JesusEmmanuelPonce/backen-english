const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controller");
module.exports = function(){

    router.get("/", controllers.Home);

    // Mostrar Frases
    router.get("/phrases", controllers.GetPhrases);

    // //Agregar Vehiculos
    // router.post("/add-vehicles", controllers.addVehicles);

    return router;
};