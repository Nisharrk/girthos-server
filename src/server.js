const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");
const measurements = require("./api/measurements");

// database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(express.json()); // body parsing middleware

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// router
app.use("/api/measurements", measurements);

// Error Handlers, see middlewares.js
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
