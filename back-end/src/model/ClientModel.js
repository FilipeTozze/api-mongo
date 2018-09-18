const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const clientSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    document_id:{
        type:Number,
        required: true
    },
    phone_number:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: false
    },
    client_id:{
        type:String,
        required: true
    },
    client_type:{
        type:String,
        required: true
    },
    products : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    addresses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        }
    ],
    created_on:{
        type: Date, 
        default: Date.now
    }
    
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;