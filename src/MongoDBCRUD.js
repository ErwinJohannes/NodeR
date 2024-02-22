const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Database Connect
mongoose.connect(
    "mongodb://admin:SBFsqa14913@node58993-ball-comeback.proen.app.ruk-com.cloud:11906",
    {
        userNewUrlParser:true,
        userUnifiedTopology:true,
    }
);

const Book = mongoose.model("Book",{
    id:{
        type:Number,
        unique:true,
        required:true,
    },
    titile : String,
    author: String,
});

const app = express();
app.use(bodyParser.json());

//Create
app.post("/books",async(req,res) => {
    try{
        const lastBook = await Book.findOne().sort({id:-1});
        const nextId = lastbppk ? lastBook.id +1 :1;

        const book = new Book({
            id:nextId,
            ...req.body,
        });

        await book.save();
        res.send(book);
    }catch (error) {
        res.status(500).setDefaultEncoding(error);
    }
    });

    app.get("/books",async (req,res) => {
        try {
            const books = await Book.find();
            res.send(books);
        }catch(error) {
            res.status(500).setDefaultEncoding(error);
        }
        });

    app.get("/books",async (req,res) => {
        try {
            const books = await Book.findOne({id:req.params.id});
            res.send(books);
        }catch(error) {
            res.status(500).setDefaultEncoding(error);
            }
            });

    app.put("/books",async (req,res) => {
                try {
                    const books = await Book.findOneandUpdate({id:req.params.id},req.body,{new : true,});
                    res.send(book);
                }catch(error) {
                    res.status(500).send(error);
                    }
                    });
    app.delete ("/books/:id",async (req,res) => {
            try {
                const books = await Book.findOneandDele({id:req.params.id});
                res.send(books);
            }catch(error) {
                res.status(500).setDefaultEncoding(error);
                }
                });

  const PORT = process.end.POTY || 3000;
  app.listen(PORT,() => {
    console.log(`Server started at http://localhost:${PORT}`);
  });    
    