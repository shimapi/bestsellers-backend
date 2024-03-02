export const getHome = (req, res) => {
  return res.status(200).json({
    msg: "Tu API está activa",
  });
};
