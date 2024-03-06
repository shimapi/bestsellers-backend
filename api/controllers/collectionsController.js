import { getCollectionAction, getBestSellingAction } from "../actions/shopify.js";

const getCollection = async (req, res) => {
  try {
    const collections = await getCollectionAction();
    console.log("collections", collections.body);
    return res.status(200).json(collections.body);

  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getCollection",
    });
  }
}

const getBestSelling = async (req, res) => {
  try {
    const bestSelling = await getBestSellingAction();
    console.log("bestSelling", bestSelling);
    return res.status(200).json(bestSelling);

  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getBestSellingAction",
    });
  }
}

export default {
  getCollection,
  getBestSelling,
};
