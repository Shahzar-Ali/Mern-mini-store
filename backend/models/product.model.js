import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add the name"]
    },
    price:{
        type:Number,
        required:[true, "Please add the user price"],
    },
    image:{
        type:String,
        required:[true, "Please add the image"]
    }
},
{
    timestamps:true
})

const Product = mongoose.model('Product',productSchema)

export default Product;