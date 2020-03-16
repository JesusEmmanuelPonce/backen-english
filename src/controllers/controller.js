const Phrases = require("../models/phrases");

//Principal
exports.Home = (req,res)=>{
    res.send('Made by Jesus Ponce');
};

exports.GetPhrases = async (req,res)=>{
    try {
        const PhrasesAll = await Phrases.findAll();
        res.json({
            "phrases" : PhrasesAll});
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "Error en el servidor "
          });
    }
}