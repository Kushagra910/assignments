// Middleware for handling auth
const {Admin} = require("../db/index");

const adminMiddleware = async (req, res, next) => {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const userName = req.headers.userName;
        const password = req.headers.password;
        console.log(userName,password);
        const adminDetails = await Admin.findOne({
            userName:userName,
            password:password,
        });
        console.log(adminDetails);
        next();
    } catch(err){
        return res.status(500).json({
            success:false,
            message:"This is the protected route for admin"
        })
    }
}

module.exports = adminMiddleware;