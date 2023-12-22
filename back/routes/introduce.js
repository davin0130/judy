module.exports = app => {
    const introduce = require("../controller/introduce.js");
  
    // Create a new introduce
    app.post("/intro", introduce.create);
  
    // Retrieve all introduce
    app.get("/intro", introduce.findAll);
  
    // Retrieve a single introduce with id
    app.get("/intro/:id", introduce.findOne);
  
    // Update a introduce with id
    app.put("/intro/:id", introduce.update);
  
    // Delete a introduce with id
    app.delete("/intro/:id", introduce.delete);
  
    // Create a new introduce
    app.delete("/intro", introduce.deleteAll);
  };