const Sequelize = require("sequelize");
const db = require("../config/bd");

const Phrases = db.define("phrases", {
    
    phrase: {
        type: Sequelize.STRING
    },

    mean_spanish: {
        type: Sequelize.STRING
    },

    mean_french: {
        type: Sequelize.STRING
    },

    example_english:{
        type: Sequelize.STRING
    },

    example_spanish:{
        type: Sequelize.STRING
    },

    example_french:{
        type: Sequelize.STRING
    },
});

module.exports = Phrases;
