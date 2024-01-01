import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.DATABASE_URI) {
      throw new Error("DATABASE_URI is not defined");
    }

    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
