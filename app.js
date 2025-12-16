const express = require("express");
const app = express();
const categoryRoutes = require("./routes/categoryroutes");
const productRoutes = require("./routes/productRoutes");

app.use(express.json());

// ROUTES API
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

// ROOT ENDPOINT (taruh DI SINI)
app.get("/", (req, res) => {
    res.json({
        message: "API is running"
    });
});

app.listen(3000, () => {
    console.log("API running on port 3000");
});

