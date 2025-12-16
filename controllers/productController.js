const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
    Product.getAll((err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getProduct = (req, res) => {
    Product.getById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
};

exports.createProduct = (req, res) => {
    Product.create(req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Product created" });
    });
};

exports.updateProduct = (req, res) => {
    Product.update(req.params.id, req.body, (err) => {
        if (err) throw err;
        res.json({ message: "Product updated" });
    });
};

exports.deleteProduct = (req, res) => {
    Product.delete(req.params.id, (err) => {
        if (err) throw err;
        res.json({ message: "Product deleted" });
    });
};
