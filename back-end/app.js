var app = require('./config/server');
const mongoose = require('mongoose');


var port = 3100;
const user = 'algar';
const password = 'algar1';

//conection with local mongo
const connectTypeLocal = `mongodb://localhost/flart`;
//conection with AWS mongo
const connectTypeAWS= `mongodb://${user}:${password}@ds257732.mlab.com:57732/flart`;

mongoose.connect(connectTypeLocal,{ useNewUrlParser: true })
    .then(_=>{
        //set app to listen port  
        app.listen(port, function(err) {
        
            if (err){
                console.log("Erro ao inicar servidor");
                console.log(err);
            }else{
                console.log('');
                console.log('Server ON...');
                console.log(`Server HTTP running into port ${port}`);
                console.log('');
            }
        
        });
    }).catch(error => {
            console.log(error.message);
});

