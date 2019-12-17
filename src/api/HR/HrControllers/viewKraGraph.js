
const KraSheetModel=require("../../kraSheets/krasheetmodel")
const ViewKraGraphs=async (req,res)=>{

    const kra =await KraSheetModel.findOne({userId:req.params.id})
    
    
    const result=kra.kraSheet.map(kr=>{
      const date=kr.date
      const values=kr.kraAttributes.map(obj=>(obj.value))
      
      let average =  values.reduce((a, b) => a + b) / values.length;
      
      return {date,average}
    })
    
    res.send(result)
    
    }
    
    module.exports={ViewKraGraphs}