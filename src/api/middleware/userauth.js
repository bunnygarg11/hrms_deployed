const jwt = require("jsonwebtoken");
const User = require("../users/user.model");
const userauth = async (req, res, next) => {
  try {
    req.skip=req.params.skip;
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, "secretKey");
    const user = await User.findOne({ _id: decoded.userdata._id, token });
    if (!user) {
      
      throw new Error();
    }
    req.token = token;
    req.user = user;
    req._id = decoded.userdata._id;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = userauth;
