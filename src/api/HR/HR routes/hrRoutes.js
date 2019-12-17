var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();

const HrAuth=require("../../middleware/Hrauth")
const {showProfileById}=require("../HrControllers/showProfileById")
const {showEmploye}=require("../HrControllers/showEmployeesHR")


router.get("/view/user/profile/:id",HrAuth,showProfileById)
router.get("/hr/show/users/:skip",HrAuth,showEmploye)


module.exports = router;