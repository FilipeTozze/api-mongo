const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const productSchema = new mongoose.Schema({
    client : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    name:{
        type:String,
        required: true
    },
    list_price:{
        type: String,
        required: true
    },
    sku:{
        type:Number,
        required: true
    },
    product_id:{
        type:String,
        required: true
    },
    created_on:{
        type: Date, 
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;