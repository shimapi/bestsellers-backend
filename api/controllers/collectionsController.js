import { getCollectionAction } from "../actions/shopify.js";

const getCollection = async (req, res) => {
  try {
    const collections = await getCollectionAction();
    console.log("collections", collections.body);
    return res.status(200).json(collections.body);

  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.",
    });
  }
}

export default {
  getCollection
};
