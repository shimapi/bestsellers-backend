const getHome = (req, res) => {
  try {
    return res.status(200).json({
      msg: "La API está activa",
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      msg: "Hubo un problema en el servidor.getHome",
    });
  }
};

export default {
  getHome,
};
