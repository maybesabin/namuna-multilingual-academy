import mongoose from "mongoose"

const MONGO_URI = process.env.MONGO_URI!;

const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to mongoDB ✅")
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

export default connectToDb;