const sql = require("./db.js");

// constructor
const Portfolio = function(portfolio) {
  this.id = portfolio.id;
  this.title = portfolio.title;
  this.description = portfolio.description;
  this.date = portfolio.date;
  this.images = portfolio.images;
  this.skills = portfolio.skills;
  this.responsibility = portfolio.responsibility;
  this.result = portfolio.result;
  this.conclusion = portfolio.conclusion;
};

Portfolio.create = (newPortfolio, result) => {
  sql.query("INSERT INTO portfolio SET ?", newPortfolio, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created portfolio: ", { id: res.insertId, ...newPortfolio });
    result(null, { id: res.insertId, ...newPortfolio });
  });
};

Portfolio.findById = (id, result) => {
  sql.query(`SELECT * FROM portfolio WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found portfolio: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Portfolio with the id
    result({ kind: "not_found" }, null);
  });
};

Portfolio.getAll = result => {
  sql.query("SELECT * FROM portfolio", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("portfolio: ", res);
    result(null, res);
  });
};

Portfolio.updateById = (id, result) => {
  sql.query(
    "UPDATE portfolio SET title = ?, description = ?, date = ?, images = ?, skills = ?, responsibility = ?, result = ?, conclusion = ? WHERE id = ?",
    [portfolio.title, portfolio.description, portfolio.date, portfolio.images, portfolio.skills, portfolio.responsibility, portfolio.result, portfolio.conclusion, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Portfolio with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated portfolio: ", { id: id, ...portfolio });
      result(null, { id: id, ...portfolio });
    }
  );
};

Portfolio.remove = (id, result) => {
  sql.query("DELETE FROM portfolio WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Portfolio with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted portfolio with id: ", id);
    result(null, res);
  });
};

Portfolio.removeAll = result => {
  sql.query("DELETE FROM portfolio", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} portfolio`);
    result(null, res);
  });
};

module.exports = Portfolio;