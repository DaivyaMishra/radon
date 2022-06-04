const UserModel= require("../models/userModel")

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBooklist= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBooklist= getBooklist