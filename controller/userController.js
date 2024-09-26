const User = require("../model/userSchema")

const getAllUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}

const getUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findById(id)
    res.send(data)
}

const createUser = async (req, res) => {
    let data = await User.create(req.body)
    res.send(data)
}

const updateUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.send(data)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser }