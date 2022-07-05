import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://Salasman:123@alurabiblioteca.jruun.mongodb.net/Biblioteca");
mongoose.connect("mongodb+srv://Salasman:123@alurabiblioteca.jruun.mongodb.net/Biblioteca")

let db = mongoose.connection;

export default db