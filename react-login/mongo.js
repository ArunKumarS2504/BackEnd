const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/react-login")
.then(()=>console.log('mongoDB Connected'))
.catch(()=>console.log("failed"))

const newSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

const collection = mongoose.model('collections',newSchema)

module.exports=collection