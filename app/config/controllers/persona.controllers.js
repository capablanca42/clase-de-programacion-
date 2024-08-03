const db = require("../models");
const Persona = db.personas;



exports.findAll = (req, res) => {
    const apellidos = req.query.apellidos;
    var condition = apellidos ? {apellidos: { $regex: new RegExp(apellidos), $options: "i" } } : {};
  
   persona.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Hubo error al recuperar la información de Personas."
        });
      });
  };
