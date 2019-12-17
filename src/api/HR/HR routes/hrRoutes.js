var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();
// const adminauth = require("../../middleware/adminauth");
// const { showEmploye } = require("../admin_controllers/showemploye");
// const { addUser } = require("../admin_controllers/adduser");
const {showProfileById}=require("../HrControllers/showProfileById")

// router.get("/showemployees/:skip", adminauth, showEmploye);
router.get("/view/user/profile/:id",showProfileById)


module.exports = router;