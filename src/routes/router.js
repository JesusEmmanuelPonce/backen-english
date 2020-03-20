const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controller");
module.exports = function(){

    router.get("/", controllers.Home);

    // Mostrar Frases
    router.get("/get-phrases", controllers.GetPhrasal);

    // Mostrar Verbos regulares
    router.get("/regular-verbs", controllers.RegularVerbs);

    // Mostrar Verbos irregulares
    router.get("/irregular-verbs", controllers.IrregularVerbs);

    // //Agregar Vehiculos
    // router.post("/add-vehicles", controllers.addVehicles);

    return router;
};