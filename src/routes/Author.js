import express from "express";
import AuthorsController from "../controller/Author.js";

const router = express.Router();

router
.get("/authors", AuthorsController.list)
.get("/authors/:id", AuthorsController.getById)
.post("/authors", AuthorsController.create)
.put("/authors/:id" , AuthorsController.update)
.delete("/authors/:id" , AuthorsController.delete)

export default router;