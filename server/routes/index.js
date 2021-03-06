import express from "express";
const router = express.Router();
const todosController = require("../controllers").todos;
const todoItemsController = require("../controllers").todoItems;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api", (req, res) =>
  res.status(200).send({
    message: "Welcome to the Todos API"
  })
);

router.get("/api/todos", todosController.list);
router.post("/api/todos", todosController.create);
router.post("/api/todos/:todoId/items", todoItemsController.create);

module.exports = router;
