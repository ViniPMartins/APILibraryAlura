import mongoose from "mongoose";
import "dotenv/config";

const strConnetion = process.env.MONGO_STRING;

async function connectDataBase () {
    mongoose.connect(strConnetion)

    return mongoose.connection;
};

export default connectDataBase;