import Users from "../../../models/Users";
import Userscart from "../../../models/Userscart";
import connectDB from "../../../middleware/mongoose";   

// DELETE API

const handler = async (req, res) => {


    if(req.method == 'DELETE') {
     console.log(req.body);
     try{
        
        let data = await Userscart.findOne({userid: req.body.userid, productid: req.body.productid});
        const response = await data.delete();
        if(!data) {
            res.status(400).json({message: 'Product not found'});
        } else {
            res.status(200).json({message: 'Product removed from the cart', data: response});
        }
      
     } catch(err) {
      res.status(400).json({message: 'Please add the product to your cart'});
     }
 
    } else {
     res.status(400).json({message: 'Method not allowed.'});
    }
 
 
 }
 
 export default connectDB(handler);