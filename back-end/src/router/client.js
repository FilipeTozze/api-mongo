const Client = require('../model/ClientModel');
const Product = require('../model/ProductModel');
const Address = require('../model/AddressModel');

module.exports = function(app){

    //get all
    app.get('/clients', async (req,res,next)=>{
        try{
            const clients = await Client.find().populate(['addresses','products']);
            return res.status(200).send({clients})
        }catch(error){
            return res.status(400).send({message: 'Error loading client'})
        }
    });
    //getby id
    app.get('/clients/:id', async (req,res,next)=>{
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(200).status(400).send({message: 'Invalid ID'})
        }
        try{
            const client = await Client.findById(req.params.id).populate(['addresses','products']);
            return res.send({client});
            
        }catch(error){
            return res.status(400).send({message: 'Error loading client'})
        }
    });

     //save
     app.post('/clients', async (req,res,next)=>{

        try{
            const {name, document_id, phone_number, email, client_id, client_type, products, addresses} = req.body;
            //create client
            const client = await Client.create({
                name,
                document_id, 
                phone_number, 
                email, 
                client_id, 
                client_type
            });
            //create product
            await Promise.all (products.map(async product => {
                const clientProduct = new Product({...product, client: client._id});

               await clientProduct.save();

               client.products.push(clientProduct);
            }));

            //create address
            await Promise.all (addresses.map(async address => {
                const clientAddress = new Address({...address, client: client._id});

               await clientAddress.save();

               client.addresses.push(clientAddress);
            }));
            //save client with product and address
            await client.save();

            return res.status(200).send({message: true});
        }catch(error){
            console.log(error);
            return res.status(400).send({message: 'Error creating new client'})
        }
    });

    //update
    app.put('/clients/:id', async (req,res,next)=>{
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({message: 'Invalid ID'})
        }
        try{
            const {name, document_id, phone_number, email, client_id, client_type, products, addresses} = req.body;
            //update client
            const client = await Client.findByIdAndUpdate(req.params.id,{
                name,
                document_id, 
                phone_number, 
                email, 
                client_id, 
                client_type
            },{
                new: true
            });

            //remove all product of client
            client.products = [];
            await Product.remove({client : client._id});

            //remove all address of client
            client.address = [];
            await Address.remove({client : client._id});

            //update product
            await Promise.all (products.map(async product => {
                const clientProduct = new Product({...product, client: client._id});

               await clientProduct.save();

               client.products.push(clientProduct);
            }));

            //update address
            await Promise.all (addresses.map(async address => {
                const clientAddress = new Address({...address, client: client._id});

               await clientAddress.save();

               client.addresses.push(clientAddress);
            }));
            //update client with product and address
            await client.save();

            return res.status(200).send({message: true});
        }catch(error){
            console.log(error);
            return res.status(400).send({message: 'Error update client'})
        }
    });

    //delete
    app.delete('/clients/:id', async (req,res,next)=>{
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).send({message: 'Invalid ID'})
        }
        try{
            await Client.findByIdAndRemove(req.params.id);
            await Product.remove({client : req.params.id});
            await Address.remove({client : req.params.id});
            return res.status(200).send({message: true});
            
        }catch(error){
            return res.status(400).send({message: 'Error deleting client'})
        }
    });
  
    
};

