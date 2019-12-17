var express = require("express");
const {check,validationResult}=require("express-validator")
var router = express.Router();

const HrAuth=require("../../middleware/Hrauth")
const {showProfileById}=require("../HrControllers/showProfileById")
const {showEmploye}=require("../HrControllers/showEmployeesHR")
const viewKraGraphsHr=require("../HrControllers/viewKraGraph")


router.get("/view/user/profile/:id",HrAuth,showProfileById)
router.get("/hr/show/users/:skip",HrAuth,showEmploye)
router.get("/hr/show/userKra/:id",HrAuth,viewKraGraphsHr)


module.exports = router;