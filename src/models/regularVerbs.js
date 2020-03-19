const Sequelize = require("sequelize");
const db = require("../config/bd");

const RegularVerbs = db.define("regularVerbs", {
    
    infinitive: {
        type: Sequelize.STRING
    },

    past: {
        type: Sequelize.STRING
    },

    participle: {
        type: Sequelize.STRING
    },

    translation:{
        type: Sequelize.STRING
    }
});

module.exports = RegularVerbs;
