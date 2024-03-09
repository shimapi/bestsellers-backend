import { getVariantsAction } from "../actions/shopify.js"

const getVariants = async (req, res) => {
  try {
    const { id } = req.params;
    const variants = await getVariantsAction(id);
    if (!variants) {
      res.status(404).json({
        msg: "Variante no encontrada",
      });
    }
    return res.status(200).json({
      msg: "Variante encontrada con éxito",
      data: variants.body.variants,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getVariants",
    });
  }
}