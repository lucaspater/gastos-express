const express = require("express");
const bodyParser = require("body-parser");

const expenseRouter = require("./routes/expenses-router");
const listsRouter = require("./routes/lists-routes");

const app = express();

app.use(bodyParser.json());

app.use("/expense", expenseRouter);
app.use("/lists", listsRouter);
app.use("/healtcheck", (req, res, next) => {
  res.status(200);
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
