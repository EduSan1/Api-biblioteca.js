import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes.js";

const app = express();

app.use(express.json())
routes(app)

db.on("error", console.log.bind(console, "erro"))
db.once("open" , () => {
  console.log("Conexão com banco feita com sucesso!!!")
})

// const books = [
//   {id: 1, "titulo": "Senhor dos Aneis"},
//   {id: 2, "titulo": "O Hobiit"}
// ]

app.get('/books/:id', (req, res) => {
  let index = searchBook(req.params.id);
  res.json(books[index]);
})

app.put('/books/:id', (req, res) => {
  console.log(req.body)
  res.json(books);
  books[index].titulo = req.body.titulo;
  res.json(books);
})

app.delete('/books/:id', (req, res) => {
  let {id} = req.params;
  let index = searchBook(id);
  books.splice(index, 1);
  res.send(`Livro ${id} removido com sucesso`);
})


function searchBook(id) {
  return books.findIndex(book => book.id == id)
}



export default app