import books from "../models/Book.js"

class BooksController {
    static list = (req , res) => {
        books.find(( err , books ) => {
            res.status(200).json(books)
          })
    }

    static getById = (req , res) => {
        const id = req.params.id;
        
        books.findById(id , (err , books) => {
            if(!err) {
                res.status(200).send(books)
            }else {
                res.status(400).send({message: `${err.message} - error to find this id`})
            }
        })

    }

    static create = (req , res) => {
        let book = new books(req.body);
        book.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - error on create book`})
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static update = (req , res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (!err) {
                res.status(200).send({message : "Successfully update book!!!"})
            }else {
                res.status(500).send({message : err.message})
            }
        })

    }

    static delete = (req , res) => {
        const id = req.params.id; 
        books.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Successfully deleted book!!!`})
            }else {
                res.status(400).send({message: `${err.message} - error to find this id`})
            }
        })
    }
}

export default BooksController