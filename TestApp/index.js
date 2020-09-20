const fs = require('fs')
const {readfile}  = require('./operations/samplefunction')
//const uuid = require('uuid')
//s.sample()

fs.readFile('C:\\Shreya\\Learning\\nodejs\\Applications\\TestApp\\package.json', (err,data)=>{
    if (err) {
        console.log("exit from the system....", err)
    }else{
        let js = data.toString("utf-8")
        let j = JSON.parse(js)
        console.log(j.name)
        console.log(JSON.stringify(j))
    }
})
//console.log("***End****" + s.readfile())
readfile((err,data)=>{
    console.log("$$$$$$$:" + data)
})
console.log("****END END *****");

