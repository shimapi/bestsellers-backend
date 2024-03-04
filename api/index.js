import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getPages, getCollection } from "./actions/shopify.js";
import productsController from "./controllers/productsController.js";
import { getHome } from "./controllers/homeController.js";

dotenv.config();

const PORT = process.env.PORT || 3003;

const app = express();

// inclúyelos antes de otras rutas
app.use(cors());
app.options('*', cors()); //habilitar las solicitudes de todas las rutas

app.use(express.json());

// HOME
app.get("/", getHome);

// PRODUCTS
app.get("/products", productsController.getProducts);
app.get("/products/:id", productsController.getProduct);

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
