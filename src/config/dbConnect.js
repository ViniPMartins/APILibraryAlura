import mongoose from 'mongoose';
import 'dotenv/config';

const strConnetion = process.env.MONGO_STRING;

mongoose.connect(strConnetion);

const db = mongoose.connection;

export default db;
