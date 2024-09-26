const mongoose = require('mongoose');

const connectToDatabase = async() =>{
    await mongoose.connect("mongodb+srv://deep888gohil:main@cluster0.z0uj4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users")
    console.log("Connected To Database Successfully !!");
}

module.exports = connectToDatabase;