import { getPagesAction } from "../actions/shopify.js";

const getPages = async (req, res) => {
  try {
    const pages = await getPagesAction();
    console.log("pages", pages);
    return res.status(200).json(pages.body);

  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getPages",
    });
  }
}

export default {
  getPages
};
