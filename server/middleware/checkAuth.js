const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("Authorization");
//   const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      data: "",
      error: [
        {
          msg: "No token found (access denied)",
        },
      ],
    });
  }

  try {
    let user = await JWT.verify(token, process.env.JWT_SECRET);
    // req.user = user.email;
    next();
  } catch (error) {
    return res.status(401).json({
      data: "",
      error: [
        {
          msg: "Token invalid (access denied)",
        },
      ],
    });
  }
};
