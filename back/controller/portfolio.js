const Portfolio = require("../model/portfolio.js");

// Create and Save a new Portfolio
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Portfolio
  const portfolio = new Portfolio({
    id: req.body.category,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    images: req.body.images,
    skills: req.body.skills,
    responsibility: req.body.responsibility,
    result: req.body.result,
    conclusion: req.body.conclusion
  });

  // Save Portfolio in the database
  Portfolio.create(portfolio, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Portfolio."
      });
    else res.send(data);
  });
};
// Retrieve all Portfolio from the database.
exports.findAll = (req, res) => {
    Portfolio.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving portfolio."
      });
    else res.send(data);
  });
};
// Find a single Portfolio with a id
exports.findOne = (req, res) => {

};

// Update a Portfolio identified by the id in the request
exports.findOne = (req, res) => {
    Portfolio.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Portfolio with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Portfolio with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Portfolio.updateById(
    req.params.id,
    new Portfolio(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Portfolio with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Portfolio with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Portfolio with the specified id in the request
exports.delete = (req, res) => {
    Portfolio.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Portfolio with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Portfolio with id " + req.params.id
        });
      }
    } else res.send({ message: `Portfolio was deleted successfully!` });
  });
};

// Delete all Portfolio from the database.
exports.deleteAll = (req, res) => {
    Portfolio.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all portfolio."
      });
    else res.send({ message: `All Portfolio were deleted successfully!` });
  });
};