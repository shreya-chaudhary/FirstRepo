const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
function sample(){
    console.log("printing sample function");
}

readFilePromise=()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('C:\\Shreya\\Learning\\nodejs\\Applications\\TestApp\\package.json', (err,data)=>{
            if (err) {
                reject(err)
            }else{
                let js = data.toString("utf-8")
                let j = JSON.parse(js)
                console.log("From Promise******" + j.name)
                
                resolve(JSON.stringify(j))
            }
        })
    })

}

readfile = async ()=>{
    let j1 = await readFilePromise()
    console.log("from async:" + j1)
    return j1
}    


module.exports={sample, readfile}