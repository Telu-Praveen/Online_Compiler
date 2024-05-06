const fs=require('fs');
const path=require('path');
const {exec}=require('child-process')
const {v4:uuid}=require("uuid")

const dirCodes=path.join(__dirname,"codes");

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true})
}

//console.log(uuid())


const generateFile=async (language,code)=>{
   const jobID=uuid();
   const fileName=`${jobID}.${language}`;
   const filePath=path.join(dirCodes,fileName)
   fs.writeFileSync(filePath,code);
   return filePath;
}
module.exports={generateFile};