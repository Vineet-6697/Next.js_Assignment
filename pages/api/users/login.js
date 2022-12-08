import Users from "../../../models/Users";

import connectDb from "../../../middleware/mongoose";


//POST api call to find a single user
const handler = async(req, res) => {
    if(req.method == 'POST') {
        console.log(req.body);
        try{
            
            let data = await Users.findOne({email: req.body.email})
            // find - return an array - find length of array === 1
            // findOne - retun an object - check null - null/{}
            if(data !== null) { // findonw will retun null if no data
                console.log('user found.................')
                if(data.password === req.body.password) {
                    res.status(200).json(data);
                }
                else {
                    res.status(400).json({message: 'Invalid Password'})
                }
            }
            else {
                console.log('user not found.................')
                res.status(400).json({message: 'User Not Found'})
            }
        }
        catch(err){
            res.status(400).json({message: err.message})
        }        
    }
    else {
        res.status(400).json({message: 'Method not alloweed.'})
    }
}

export default connectDb(handler);




// email does not exist
// password does not match
// both failed


