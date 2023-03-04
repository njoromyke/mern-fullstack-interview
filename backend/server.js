const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const { CONFIG } = require("./utilities/constants");
const connectDB = require("./config/database/database");
const user_routes = require("./routes/user_route");
const product_routes = require("./routes/product_route");
const { not_found, error_handler } = require("./middleware/error");

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

if (CONFIG.env === "development") {
  const morgan = require("morgan");

  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/v1/users", user_routes);
app.use("/api/v1/products", product_routes);
app.use(not_found);
app.use(error_handler);

const PORT = CONFIG.PORT;

app.listen(PORT, () => {
  console.log(`Server running in ${CONFIG.NODE_ENV} mode on port ${PORT}`);
});
