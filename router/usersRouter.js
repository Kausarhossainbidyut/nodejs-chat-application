// external import
const express = require("express")

// internal import 
const {getUsers, addUser} = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require("../middlewares/users/avatarUpload")
const {addUserValidators,  addUserValidatorsHandler} = require("../middlewares/users/userValidators")

const router = express.Router()

// Users page
router.get("/",decorateHtmlResponse("Users"), getUsers)

// add user
router.post("/", avatarUpload, addUserValidators,  addUserValidatorsHandler, addUser )


module.exports = router