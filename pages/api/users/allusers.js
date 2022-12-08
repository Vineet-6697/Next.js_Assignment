import Users from "../../../models/Users";

import connectDb from "../../../middleware/mongoose";

const handler = async(req, res) => {
        try{   
            console.log('inside all users.')
            let data = await Users.find({}); 
            res.status(200).json(data);
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
}

export default connectDb(handler);

