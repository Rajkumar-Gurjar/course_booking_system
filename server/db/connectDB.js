const mongoose = require("mongoose");

const connectDB = async () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/coursebookingapi1')

    .then(() => {
        console.log("Database Connection succesful");
    })
    .catch((error) => {
        console.log(error);
    });
};

module.exports = connectDB;