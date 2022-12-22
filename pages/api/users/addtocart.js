import Users from "../../../models/Users";
import Userscart from "../../../models/Userscart";
import connectDB from "../../../middleware/mongoose";   

// PUT API

const handler = async (req, res) => {


    if(req.method == 'PUT') {
     console.log(req.body);
     try{
        
        let temp = new Userscart({
            userid: req.body.userid,
            productid: req.body.productid,
            purchased: false
        });

        const response = await temp.save();

        // res.status(201).json(response);
        res.status(201).json({message: 'Product added to the cart', data: response});
      
     } catch(err) {
      res.status(400).json({message: err.message});
     }
 
    } else {
     res.status(400).json({message: 'Method not allowed.'});
    }
 
 }
 
 export default connectDB(handler);