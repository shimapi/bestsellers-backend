import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsController from "./controllers/productsController.js";
import collectionsController from "./controllers/collectionsController.js";
import pagesController from "./controllers/pagesController.js";
import homeController from "./controllers/homeController.js";

dotenv.config();

const PORT = process.env.PORT || 3003;

const app = express();

// inclúyelos antes de otras rutas
app.use(cors());
app.options('*', cors()); //habilitar las solicitudes de todas las rutas

app.use(express.json());

// HOME
app.get("/", homeController.getHome);

// PRODUCTS
app.get("/products", productsController.getProducts);
app.get("/products/:id", productsController.getProduct);

// COLLECTIONS
app.get("/collection", collectionsController.getCollection);
app.get("/best", collectionsController.getBestSelling);
app.get("/amour", collectionsController.getAmour);

// PAGES
app.get("/pages", pagesController.getPages);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
