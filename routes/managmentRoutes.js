import express from "express";
import {
  getProducts,
  postProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", getProducts);
router.post("/productscreate", postProduct);
router.put("/products/:id", updateProduct);
router.get("/products/:id", getProduct);
router.delete("/products", deleteProduct);

export default router;
