const { Router } = require("express")
const { getAllUser, getUser, createUser, updateUser, deleteUser } = require("../controller/userController")

const userRouter = Router()

userRouter.get("/all/",getAllUser)
userRouter.get("/:id",getUser)
userRouter.post("/",createUser)
userRouter.patch("/:id",updateUser)
userRouter.delete("/",deleteUser)

module.exports = userRouter;