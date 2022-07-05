import express from "express"
import books from "./routes/Books.js"
import authors from "./routes/Author.js"

const routes = (app) => {
    app.route("/").get(( req , res ) => {
        res.status(200).send({titulo : "Curso de Node"})
    })

    app.use(
        express.json(),
        books,
        authors
    )
}

export default routes