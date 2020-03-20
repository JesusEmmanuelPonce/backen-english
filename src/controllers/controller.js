const Phrases = require("../models/getPhrasal");
const RegularVerbs = require("../models/regularVerbs");
const IrregularVerbs = require("../models/irregularVerbs");

//Principal
exports.Home = (req,res)=>{
    res.send('Made by Jesus Ponce');
};

exports.GetPhrasal = async (req,res)=>{
    try {
        const GetPhrasesAll = await Phrases.findAll();
        res.json({
            "GetPhrases" : GetPhrasesAll});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error en el servidor "
          });
    }
}

exports.RegularVerbs = async (req,res)=>{
    try {
        const RegularVerbsAll = await RegularVerbs.findAll();
        res.json({
            "RegularVerbs" : RegularVerbsAll});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error en el servidor "
          });
    }
}

exports.IrregularVerbs = async (req,res)=>{
    try {
        const IrregularVerbsAll = await IrregularVerbs.findAll();
        res.json({
            "IrregularVerbs" : IrregularVerbsAll});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error en el servidor "
          });
    }
}