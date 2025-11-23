<<<<<<< HEAD
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
=======
import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default cloudinary