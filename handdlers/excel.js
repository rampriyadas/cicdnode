const fs = require('fs')
const XLSX = require('xlsx')
const portfolio = require('../schema/portfolio')
const policy = require('../schema/policy')

const getX = (req,res)=>{
    const file = `./sample.xlsx`;
    res.download(file);
 
 }

const postX = async (req,res)=>{
   try{
   const bf = Buffer.from(req.body.excel.data);
   const workbook = XLSX.read(bf.toString());
   var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    const prtfio = await portfolio.create({
      portfolio_name : req.body.portfolio_name,
      });
    xlData.forEach( async element  => {
    const data = await policy.create({
      policy_number : element.Policy_Number,
      portfolio : prtfio.id,
      khasra: element.Khasra,
      village: element.Village,
      tehsil: element.Tehsil,
      district: element.District,
      state: element.State,
      appicant: element.Applicant,
      });
    
    });
    res.status(200).json({"message":"portfolio uploaded"});
   }
   catch(e){
      res.status(400).json({"message":"something went wrong !"});
   }
 }


 module.exports = {getX,postX}