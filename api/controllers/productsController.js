import { getProductAction, getProductsAction } from "../actions/shopify.js";

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductAction(id);

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
      msg: "Hubo un problema en el servidor.getProduct",
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const { body } = await getProductsAction();
    const { products } = body;
    return res.status(200).json({
      msg: "Producto encontrado con éxito",
      data: products.body.products,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getProducts",
    });
  }
};


export default {
  getProduct,
  getProducts,
};
