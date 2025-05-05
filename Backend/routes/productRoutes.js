const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      material,
      images,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      material,
      images,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the the admin user who created it
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route PUT /api/products/:id
// @desc Update an existing product ID
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      material,
      images,
      isFeatured,
      isPublished,
      dimensions,
      weight,
      sku,
    } = req.body;

    // Find product by ID
    const product = await Product.findById(req.params.id);
    if (product) {
      // Update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.material = material || product.material;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      // Save the updated product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      // Remove the product from DB
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public
router.get("/", async (req, res) => {
  try {
    const { category, size, color, minPrice, maxPrice, search, limit } =
      req.query;

    let query = {};

    // Filter logic
    if (category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }

    if (size) {
      query.sizes = { $in: size.split(",") };
    }

    if (color) {
      query.colors = { $in: [color] };
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Fetch products and apply sorting and limit
    let products = await Product.find(query).limit(Number(limit) || 0);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status.apply(500).send("Server Error");
  }
});

// @route GET /api/products/some-outfits
// @desc Retrieve latest 4 products - Creation date
// @access Public
router.get("/some-outfits", async (req, res) => {
  try {
    // Fetch latest 4 products
    const someOutfits = await Product.find().sort({ createdAt: -1 }).limit(4);
    res.json(someOutfits);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route GET /api/products/:id
// @desc Get a single productby ID
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
