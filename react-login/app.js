const express = require('express');
const cors= require('cors');
const collection = require('./mongo')
const app = express();
app.use(express.json())
app.use(cors())

app.get('/',cors(),(req,res)=>{

    })

app.post('/',async(req,res)=>{
    const {email,password} = req.body
    try{
        const check = await collection.findOne({email:email})
        if(check){
             res.json('Exist')
        }
        else{
             res.json('NotExist')
        }
    }
    catch(e){
        res.json('NotExist')
    }
})

app.post('/signup',async(req,res)=>{
    const data =  {email,password} 
    try{
        const check = await collection.findOne({email:email})
        if(check){
             res.json('Exist')
        }
        else{
             res.json('NotExist')
             await collection.insertMany([data])
        }
    }catch(e){
        res.json('NotExist')
    }

})

app.listen(8000,()=>{
    console.log('server runnning in 8000')
})