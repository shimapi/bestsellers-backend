import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {
  getProduct,
  getProducts,
  getPages,
  getCollection,
} from "./actions/shopify.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
  origin: 'http://localhost:5175'
}));

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const { productID } = req.query;

    const product = await getProduct(productID);

    if (!product) {
      res.status(404).json({
        msg: "Producto no encontrado",
      });
    }

    return res.status(200).json({
      msg: "Producto encontrado con éxito",
      data: product.body.product,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
});

app.get("/products", async (req, res) => {
  const products = await getProducts();
  console.log("products", products);
  return res.status(200).json(products);
});

app.get("/pages", async (req, res) => {
  const pages = await getPages();
  console.log("pages", pages);
  return res.status(200).json(pages);
});

app.get("/collection", async (req, res) => {
  const collections = await getCollection();
  console.log("collections", collections);
  return res.status(200).json(collections);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
