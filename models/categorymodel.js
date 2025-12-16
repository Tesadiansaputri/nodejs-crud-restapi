const db = require("../config/db.js");

exports.getAll = (callback) => {
    db.query("SELECT * FROM categories", callback);
};

exports.getById = (id, callback) => {
    db.query("SELECT * FROM categories WHERE id = ?", [id], callback);
};

exports.create = (data, callback) => {
    db.query("INSERT INTO categories SET ?", data, callback);
};

exports.update = (id, data, callback) => {
    db.query("UPDATE categories SET ? WHERE id = ?", [data, id], callback);
};

exports.delete = (id, callback) => {
    db.query("DELETE FROM categories WHERE id = ?", [id], callback);
};
