import mongoose  from "mongoose";

    const connectDB=async ()=>{
        const conncectionInstance= await mongoose.connect(`${process.env.MOGOODB_URI}/ShortUri`)
        console.log(`\n mongoodb conected!! DB HOST:${conncectionInstance.connection.host}`);
    }
    export default connectDB;