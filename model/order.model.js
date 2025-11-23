<<<<<<< HEAD
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:'User'
    },
    book : [{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:"Book"
    }],
    totalPrice : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        enum : ["placed" , "shipped","delivered","cancelled"],
        default:"placed"
    }
})

const Order = new mongoose.model('Order', orderSchema);
=======
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:'User'
    },
    book : [{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref:"Book"
    }],
    totalPrice : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        enum : ["placed" , "shipped","delivered","cancelled"],
        default:"placed"
    }
})

const Order = new mongoose.model('Order', orderSchema);
>>>>>>> 266eacda04f6dcbe394253cfe4fb903f9a389e9c
export default Order;