const User = require("../../users/user.model")
const Designation=require("../../designation/designation.model")
const showEmploye = async (req, res) => {
    const designation_id=Designation.find({name:{$in:["Admin","Human Resource"]}}).select("_id")
    const arr=designation_id.map(e=>(e._id))
  const userarr = await User.find({ designation_id: { $nin: arr} });
  const userlength = userarr.length;
  const skip = Number(req.skip);
  const user = await User.find({ designation_id: { $nin: arr} })
    .select("prefix name gender jobStatus")
    .sort({ _id: -1 })
    .skip(skip)
    .limit(3)
    .populate("designation_id department_id ", ["name"]);
  res.send({ user, userlength });
};
module.exports = { showEmploye };
