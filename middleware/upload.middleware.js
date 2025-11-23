<<<<<<< HEAD
import multer from "multer"

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images are allowed"), false); 
}

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024}
=======
import multer from "multer"

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image/")) cb(null, true);
    else cb(new Error("Only images are allowed"), false); 
}

export const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024}
>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
})