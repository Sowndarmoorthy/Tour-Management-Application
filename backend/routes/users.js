const { deleteUser, getAllUser, getSingleUser, updateUser } = require( "../controllers/userController.js");

const express = require("express");
const router = express.Router()
const { verifyUser } = require("../utils/verifyToken.js")

router.put('/:id',verifyUser ,updateUser); 

router.delete('/:id',verifyUser,deleteUser); 

router.get('/:id',verifyUser,getSingleUser); 

router.get('/',verifyUser,getAllUser); 


module.exports=router;