import mongoose from "mongoose";

const connectMongoDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://yadavyuva9632:sageyuva@cluster0.c7phzyf.mongodb.net/');
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDB;