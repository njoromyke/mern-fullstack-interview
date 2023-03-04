const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

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

// Routes

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${CONFIG.env} mode on port ${PORT}`);
});
