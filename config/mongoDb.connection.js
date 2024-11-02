import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
    // const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/scatch";
        const mongoUri = process.env.MONGO_URI 
    try {
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);

        // Retry mechanism: retry connecting every 5 seconds
        setTimeout(connectToDatabase, 5000);
    }
};
export default connectToDatabase;

// await mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if unable to connect
//     autoIndex: false, // Disable auto-indexing in production for performance
//     useCreateIndex: true, // Use MongoDB's new index creation for safety and efficiency
//     useFindAndModify: false, // Use native findOneAndUpdate() instead
// });