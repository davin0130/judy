const sql = require("./db.js");

// constructor
const Introduce = function(intro) {
  this.category = intro.category;
  this.title = intro.title;
  this.description = intro.description;
  this.date = intro.date;
};

Introduce.create = (newIntro, result) => {
  sql.query("INSERT INTO introduce SET ?", newIntro, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created intro: ", { id: res.insertId, ...newIntro });
    result(null, { id: res.insertId, ...newIntro });
  });
};

Introduce.findById = (id, result) => {
  sql.query(`SELECT * FROM introduce WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found introduce: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Introduce with the id
    result({ kind: "not_found" }, null);
  });
};

Introduce.getAll = result => {
  sql.query("SELECT * FROM introduce", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("introduce: ", res);
    result(null, res);
  });
};

Introduce.updateById = (id, result) => {
  sql.query(
    "UPDATE introduce SET category = ?, title = ?, description = ?, date = ? WHERE id = ?",
    [intro.category, intro.title, intro.description, intro.date, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Introduce with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated intro: ", { id: id, ...intro });
      result(null, { id: id, ...intro });
    }
  );
};

Introduce.remove = (id, result) => {
  sql.query("DELETE FROM introduce WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Introduce with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted introduce with id: ", id);
    result(null, res);
  });
};

Introduce.removeAll = result => {
  sql.query("DELETE FROM introduce", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} introduce`);
    result(null, res);
  });
};

module.exports = Introduce;