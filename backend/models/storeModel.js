const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
    storeName:{
        type:String,
        required: true,
        trim:true
    },
    storeDescription:{
        type:String,
        trim:true
    },
    dateCreated:{
        type:Date,
        default: Date.now
    },
    category:{
        type:String,
        trim:true
    },
    company:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('stores',storesSchema);