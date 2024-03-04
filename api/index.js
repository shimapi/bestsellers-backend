import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getPages } from "./actions/shopify.js";
import productsController from "./controllers/productsController.js";
import { getHome } from "./controllers/homeController.js";
import collectionsController from "./controllers/collectionsController.js";

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

// COLLECTION
app.get("/collection", collectionsController.getCollection);

app.get("/pages", async (req, res) => {
  const pages = await getPages();
  console.log("pages", pages);
  return res.status(200).json(pages);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
