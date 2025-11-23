<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_DB)
        console.log("Database Connected")
    } catch (error) {
        console.log("Error",error)
    }
    
}

=======
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_DB)
        console.log("Database Connected")
    } catch (error) {
        console.log("Error",error)
    }
    
}

>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default connectDB