// external import
const express = require("express")

const router = express.Router()

// internal import 
const {getInbox} = require('../controller/inboxController')

// inbox page
router.get("/", getInbox)


module.exports = router