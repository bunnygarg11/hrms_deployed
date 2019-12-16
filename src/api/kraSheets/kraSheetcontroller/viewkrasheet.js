const User = require("../../users/user.model");
const KraSheetModel = require("../krasheetmodel");
const Viewkra = async (req, res) => {

  try {
    let kra = await KraSheetModel.findOne({ userId: req._id }).select("-_id");
    if (!kra) {
      return res.status(400).json({error:"No Kra found"});
    }

    kra = kra.kraSheet.filter(e => {
      return e.date.getFullYear() == req.params.year;
    });

    res.json(kra);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server");
  }
};

const ViewKraGraphs=async (req,res)=>{

const kra =await KraSheetModel.findOne({userId:req._id})


const result=kra.kraSheet.map(kr=>{
  const date=kr.date
  const values=kr.kraAttributes.map(obj=>(obj.value))
  
  let average =  values.reduce((a, b) => a + b) / values.length;
  
  return {date,average}
})

res.send(result)

}

module.exports = { Viewkra ,ViewKraGraphs};
