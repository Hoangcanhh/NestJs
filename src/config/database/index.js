const moongoose = require('mongoose');

// Connect to MongoDB
async function connect() {

try{
    await moongoose.connect('mongodb://localhost:27017/myDatabase', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connected to MongoDB');
}
catch(error){
    console.log('Failed to connect to MongoDB');
}

}
module.exports = {connect};