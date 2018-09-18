const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const addressSchema = new mongoose.Schema({
    client : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    street:{
        type:String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    zip:{
        type:String,
        required: true
    },
    created_on:{
        type: Date, 
        default: Date.now
    }
})

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;