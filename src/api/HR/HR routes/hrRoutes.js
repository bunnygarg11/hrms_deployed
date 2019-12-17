var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();

const HrAuth=require("../../middleware/Hrauth")
const {showProfileById}=require("../HrControllers/showProfileById")


router.get("/view/user/profile/:id",HrAuth,showProfileById)


module.exports = router;