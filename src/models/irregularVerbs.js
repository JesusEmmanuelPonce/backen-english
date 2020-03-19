const Sequelize = require("sequelize");
const db = require("../config/bd");

const IrregularVerbs = db.define("irregularVerbs", {
    
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

module.exports = IrregularVerbs;