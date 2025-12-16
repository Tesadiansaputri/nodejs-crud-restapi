const Category = require("../models/categorymodel");

exports.getCategories = (req, res) => {
    Category.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getCategory = (req, res) => {
    Category.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

exports.createCategory = (req, res) => {
    Category.create(req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Category created" });
    });
};

exports.updateCategory = (req, res) => {
    Category.update(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Category updated" });
    });
};

exports.deleteCategory = (req, res) => {
    Category.delete(req.params.id, (err) => {
        if (err) throw err;
        res.json({ message: "Category deleted" });
    });
};
