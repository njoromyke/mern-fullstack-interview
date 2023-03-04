const User = require("../models/User");
const { CONFIG, HTTP_STATUS_CODES } = require("../utilities/constants");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");

      if (user) {
        req.user = user;
      } else {
        res.status(HTTP_STATUS_CODES.Unauthorized);
        throw new Error("Not authorized, user is not active. Please contact the administrator.");
      }
    } catch (error) {
      console.error(error);

      res.status(HTTP_STATUS_CODES.Unauthorized);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.sendStatus(HTTP_STATUS_CODES.Unauthorized);
    throw new Error("Not authorized, no token");
  }

  next();
});

module.exports = { protect };
