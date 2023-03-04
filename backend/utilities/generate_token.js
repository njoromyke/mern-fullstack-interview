const jwt = require("jsonwebtoken");
const { CONFIG } = require("./constants");

const generateToken = (id) => {
  return jwt.sign({ id }, CONFIG.JWT_SECRET, {
    expiresIn: CONFIG.JWT_EXPIRE,
  });
};

module.exports = generateToken;
