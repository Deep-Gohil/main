const express = require("express");
const connectToDatabase = require("./config/db");
const userRouter = require("./routes/userRouter");
const PORT = process.env.port || 8090
const app = express()
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use("/user",userRouter)

app.get("/",(req,res)=>{
    res.send("default Route")
})


app.listen(PORT,()=>{
    console.log("Listening On Port http://localhost:8090 ");
    connectToDatabase()
})