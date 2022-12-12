const express = require("express");

const listsRouter = express.Router();

listsRouter.post("/:id", (req, res, next) => {});
listsRouter.put("/:id", (req, res, next) => {});
listsRouter.delete("/:id", (req, res, next) => {});
listsRouter.get("/", (req, res, next) => {});

module.exports = listsRouter;
