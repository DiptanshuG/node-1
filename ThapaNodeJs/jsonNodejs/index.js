const fs=require('fs');


const bioData = {
  name: "diptanshu",
  age: 26,
  car: "roll royace",
};

const jsonData=JSON.stringify(bioData)

fs.writeFile('json1.json', jsonData,(err)=>{
    console.log("done")
})
console.log(JSON.stringify(bioData));
// we cant calll json data same as object all


fs.readFile('json1.json',"utf-8",(err,data)=>{
    console.log(data)

    const originalD=JSON.parse(data)
    console.log(originalD)
})