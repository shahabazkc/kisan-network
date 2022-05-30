// Mongo Db connection
import mongoose, { ConnectOptions } from 'mongoose';

export const connectDb = async () => {
    try {
        const options: ConnectOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions;

        const connection = await mongoose.connect(process.env?.MONGO_URI!, options);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    }
    catch (err) {
        console.log(err);
    }
}