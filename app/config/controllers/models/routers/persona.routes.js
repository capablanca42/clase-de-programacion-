module.exports = app => {
    const personas = require("../controllers/persona.controller.js");
  
    var router = require("express").Router();
  
   
    // Listado de personas
    router.get("/", personas.findAll);
  

  
    app.use('/apiuni/personas', router);
  };