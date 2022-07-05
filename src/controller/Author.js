import authors from "../models/Author.js"

class AuthorsController {
    static list = (req , res) => {
        authors.find(( err , authors ) => {
            res.status(200).json(authors)
          })
    }

    static getById = (req , res) => {
        const id = req.params.id;
        
        authors.findById(id , (err , author) => {
            if(!err) {
                res.status(200).send(author)
            }else {
                res.status(400).send({message: `${err.message} - error to find this id`})
            }
        })

    }

    static create = (req , res) => {
        let author = new authors(req.body);
        author.save((err) => {

            if(err) {
                res.status(500).send({message: `${err.message} - error on create book`})
            } else {
                res.status(201).send(author.toJSON())
            }
        })
    }

    static update = (req , res) => {
        const id = req.params.id;

        authors.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (!err) {
                res.status(200).send({message : "Successfully update author!!!"})
            }else {
                res.status(500).send({message : err.message})
            }
        })

    }

    static delete = (req , res) => {
        const id = req.params.id; 
        authors.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Successfully deleted author!!!`})
            }else {
                res.status(400).send({message: `${err.message} - error to find this id`})
            }
        })
    }
}

export default AuthorsController