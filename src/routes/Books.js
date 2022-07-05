import express from "express";
import BooksController from "../controller/Books.js";

const router = express.Router();

router
 .get("/books", BooksController.list)
 .get("/books/buscar/editora/", BooksController.getByPublisher)
 .get("/books/:id", BooksController.getById)
 .post("/books", BooksController.create)
 .put("/books/:id" , BooksController.update)
 .delete("/books/:id" , BooksController.delete)

export default router;
