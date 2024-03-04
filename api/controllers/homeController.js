export const getHome = (req, res) => {
  return res.status(200).json({
    msg: "La API está activa",
  });
};
