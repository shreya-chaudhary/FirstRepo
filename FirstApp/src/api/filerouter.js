const express = require('express');
const fileOp = require('../data/fileOp')
const fs = require('fs');
const { request } = require('http');
const { response } = require('express');
const router = express.Router();

router.post('/', async(request,response)=>{
    try{
        let data = await createFilePromise()
        response.send(data)
    }catch(e){
        
    }    
})

router.get('/', async (request, response)=>{
    console.log("**************************1***********************")
    let data =  await readFilePromise()
    response.send(data)  
})

router.put('/:id', async (request, response)=>{
    let id = request.params.id
    let data = await updateFilePromise(id)
    response.send(data)
})

router.delete('/:id', async (request,response)=>{
    let id = request.params.id
    let data = await deleteFilePromise(id)
    response.send(data)
})

router.patch('/:id', async (request, response)=>{
    let id = request.params.id
    //let reqData = request.body
    //console.log("**************************reqData***********************")
    let data = await patchFilePromise(id)
    response.send(data)
})

module.exports = router;
