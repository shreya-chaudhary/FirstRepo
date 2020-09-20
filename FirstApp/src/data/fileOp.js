const { request } = require("express");
const fs = require('fs')
const users = require('../../users')
const { resolve } = require('path');
const { rejects } = require('assert');


createFilePromise = ()=>{
    return new Promise((resolve, reject)=>{
        let createStream = fs.createWriteStream("output.json")
        fs.copyFile('users.json','output.json', (err)=>{
            if(err){
                reject(err)
            }else{ 
                resolve(JSON.stringify("File Created Successfully"))
            }
        })        
    })
}

readFilePromise=()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('output.json', (err,data)=>{
            if (err) {
                reject(err)
            }else{
                let datastream = data.toString("utf-8")
                data = JSON.parse(datastream)          
                resolve(JSON.stringify(data))
            }
        })
    })
}

updateFilePromise = (id)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('output.json', (err,data)=>{
            if(err){
                reject(err)
            }else{
                let newuser = {}                
                newuser["name"] = "mohit"
                newuser["password"] = "password4"
                newuser["profession"]= "teacher"
                newuser["id"]=id
                data = JSON.parse(data);
                data["user"+id] =  newuser
                console.log(data)
                fs.writeFile('output.json',JSON.stringify(data),(err)=>{
                    if (err) throw err
                })          
                resolve(JSON.stringify("User data added"))
            }
        })
    })
}

deleteFilePromise = (id)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('output.json',(err,data)=>{
            if (err) {
                reject(err)
            }else{
                data = JSON.parse(data)
                if(data["user"+id]["id"] == id){
                    delete data["user" + id];
                }else{
                    throw 404
                }
                
                console.log( data );
                fs.writeFileSync("output.json", JSON.stringify(data));
                resolve(JSON.stringify(data))
            }
        })
    })
}

patchFilePromise = (id)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('output.json',(err,data)=>{
            if(err){
                reject(err)    
            }else{
                try{
                    data = JSON.parse(data);
                }catch(err){
                    console.log('Error parsing JSON string:', err)
                }    

                if(data["user"+id]["id"] == id){
                    data["user"+id]["name"] = "TestB"
                }else{
                    throw err
                }
                console.log(data);
                fs.writeFile('output.json',JSON.stringify(data),(err)=>{
                    if (err) throw err
                })          
                resolve(JSON.stringify("User data added"))                
            }
        })
    })
}
module.exports=readFilePromise,createFilePromise,deleteFilePromise,updateFilePromise,patchFilePromise
