const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL_LOCAL)
        console.log(`Connect to mongodb ${mongoose.connection.host}`);
    }catch(error){
        console.log(`Mongodb error ${error}`)
    }
}

module.exports = connectDB;