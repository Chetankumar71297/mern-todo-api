import mongoose from "mongoose";
import log from "../logger/index.js";
const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URI) {
            throw new Error("DATABASE_URI is not defined");
        }
        await mongoose.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    catch (error) {
        log.error(error);
    }
};
export default connectDB;
