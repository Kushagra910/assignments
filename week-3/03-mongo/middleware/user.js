 const {User}  = require("../db/index");
const userMiddleware = async (req, res, next) => {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const userName = req.headers.userName;
        const password = req.headers.password;
        console.log(userName,password);
        const adminDetails = await User.findOne({
            userName:userName,
            password:password,
        });
        next();
    } catch(err){
        return res.status(500).json({
            success:false,
            message:"This is the protected route for User"
        })
    }
}

module.exports = userMiddleware;