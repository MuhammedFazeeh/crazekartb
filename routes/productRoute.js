import express from "express";
import {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
} from "../controller/productController.js";
import upload from "../middleware/fileupload.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const productRoute = express.Router();

productRoute.get("/getAllProducts", getProducts);
productRoute.get("/getProduct/:id", getProductById);

productRoute.post(
  "/addproduct",
  verifyToken,
  upload.single("image"),
  addProduct
);
productRoute.put("/updateProduct/:id", verifyToken, updateProduct);
productRoute.delete("/deleteProduct/:id", verifyToken, deleteProduct);
productRoute.delete("/deleteAllProduct", verifyToken, deleteAllProducts);

export default productRoute;