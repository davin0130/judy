module.exports = app => {
    const portfolio = require("../controller/portfolio.js");
  
    // Create a new portfolio
    app.post("/portfolio", portfolio.create);
  
    // Retrieve all portfolio
    app.get("/portfolio", portfolio.findAll);
  
    // Retrieve a single portfolio with id
    app.get("/portfolio/:id", portfolio.findOne);
  
    // Update a portfolio with id
    app.put("/portfolio/:id", portfolio.update);
  
    // Delete a portfolio with id
    app.delete("/portfolio/:id", portfolio.delete);
  
    // Create a new portfolio
    app.delete("/portfolio", portfolio.deleteAll);
  };