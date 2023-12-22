const Introduce = require("../model/introduce.js");

// Create and Save a new Introduce
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Introduce
  const introduce = new Introduce({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date
  });

  // Save Introduce in the database
  Introduce.create(introduce, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Introduce."
      });
    else res.send(data);
  });
};
// Retrieve all Introduce from the database.
exports.findAll = (req, res) => {
    Introduce.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving introduce."
      });
    else res.send(data);
  });
};
// Find a single Introduce with a id
exports.findOne = (req, res) => {

};

// Update a Introduce identified by the id in the request
exports.findOne = (req, res) => {
    Introduce.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Introduce with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Introduce with id " + req.params.id
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

  Introduce.updateById(
    req.params.id,
    new Introduce(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Introduce with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Introduce with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Introduce with the specified id in the request
exports.delete = (req, res) => {
    Introduce.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Introduce with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Introduce with id " + req.params.id
        });
      }
    } else res.send({ message: `Introduce was deleted successfully!` });
  });
};

// Delete all Introduce from the database.
exports.deleteAll = (req, res) => {
    Introduce.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all introduce."
      });
    else res.send({ message: `All Introduce were deleted successfully!` });
  });
};