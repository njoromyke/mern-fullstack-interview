const { CONFIG, HTTP_STATUS_CODES } = require("../utilities/constants");
const not_found = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(HTTP_STATUS_CODES.Not_Found);

  next(error);
};

const error_handler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? HTTP_STATUS_CODES.Internal_Server_Error : res.statusCode;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: CONFIG.env === "production" ? "🥞" : err.stack,
  });
};

module.exports = { not_found, error_handler };
