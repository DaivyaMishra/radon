const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook  )

router.get("/getBooklist", UserController.getBooklist)

module.exports = router;


// {"authorname": "msd",
//      "bookname": "The Alchemist",
//      "title" :"Every few decades a book is published that changes the lives of its readers forever. The Alchemist is such a book",
//      "prize": "3200",
//       "category":"legends",
//       "year": "2022"
// }