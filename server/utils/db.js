// const mongoose = require("mongoose");
// // const URI = "mongodb://127.0.0.1:27017/mern_admin"
// const URI = process.env.MONGODB_URI;
// // const URI = "mongodb+srv://pradeepsnandayigol:pradeepsnandayigol@cluster0.fwioifo.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0"


// const connectDb = async () =>{
//     try {
//         await mongoose.connect(URI);
//         console.log('connection is successfull to db ');       
//     } catch (error) {
//         console.error("data connection is failed");
//         process.exit(0);
        
//     }
// };
// module.exports = connectDb;




const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connection to the database is successful');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit the process with a non-zero status code to indicate failure
    }
};

module.exports = connectDb;

