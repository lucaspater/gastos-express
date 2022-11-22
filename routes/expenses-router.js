const express = require("express");
const { v4: uuidv4 } = require("uuid");

const filesMethods = require("../files-functions/files-methods");

const expenseRouter = express.Router();

expenseRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const expensesList = await filesMethods.readFilePromise("expenses");

  expensesList.forEach((expense) => {
    if (id === expense.id) {
      res.send(expense);
      return;
    }
  });
});

expenseRouter.post("/", async (req, res) => {
  const expense = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    import: req.body.import,
  };

  const expensesList = await filesMethods.readFilePromise("expenses");
  expensesList.push(expense);
  await filesMethods.writeFilePromise("expenses", expensesList);

  res.send(expense)
});

expenseRouter.put("/:id", async (req, res) => {
    const editId = req.params.id;
    const expenseUpdateData = {
      id: editId,
      title: req.body.title,
      description: req.body.description,
      import: req.body.import,
    };
    const expensesList = await filesMethods.readFilePromise("todos");

    for (let i = 0; i < expensesList.length; i++) {
      if (expensesList[i].id === editId) {
        expensesList[i] = expenseUpdateData;
      }
    }
    await filesMethods.writeFilePromise("todos", expensesList);
    res.send(expenseUpdateData);
  });

  expenseRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const expensesList = await filesMethods.readFilePromise("expense");
    for (let i = 0; i < expensesList.length; i++) {
      if (id === expensesList[i].id) {
        expensesList.splice(i, 1);
      }
    }
    await filesMethods.writeFilePromise("expense", expensesList);
    res.status(204).send();
  });


  expenseRouter.get("/", async (req, res) => {
    const expensesList = await filesMethods.readFilePromise("expense");
    res.send(expensesList);
  });


module.exports = expenseRouter;
