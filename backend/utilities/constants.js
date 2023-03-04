exports.CONFIG = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE || "1d",
};

exports.HTTP_STATUS_CODES = {
  OK: 200,
  Created: 201,
  Accepted: 202,
  No_Content: 204,
  Bad_Request: 400,
  Unauthorized: 401,
  Forbidden: 403,
  Not_Found: 404,
  Method_Not_Allowed: 405,
  Not_Acceptable: 406,
  Request_Timeout: 408,
  Conflict: 409,
  Unsupported_Media_Type: 415,
  Unprocessable_Entity: 422,
  Too_Many_Requests: 429,
  Internal_Server_Error: 500,
  Not_Implemented: 501,
  Bad_Gateway: 502,
  Service_Unavailable: 503,
  Gateway_Timeout: 504,
};

exports.PASSWORD_SALT = 10;
