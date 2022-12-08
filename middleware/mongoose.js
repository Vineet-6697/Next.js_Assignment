import mongoose from "mongoose";
const connectDb  = handler => async(req,res) =>{
    if(mongoose.connectDb[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect('mongodb+srv://vineet:Vineet@1234@cluster0.s0ihx97.mongodb.net/?retryWrites=true&w=majority');
    return handler(req,res);
}
export default connectDb;



// mongodb+srv://testuser001:<password>@cluster0.2eq41.mongodb.net/?retryWrites=true&w=majority
