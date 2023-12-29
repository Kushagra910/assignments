const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User , Course} = require("../db/index");
const zod = require("zod");
const { default: mongoose } = require("mongoose");
const schema = zod.string();

// User Routes
router.post("/signup", async (req, res) => {
  try {
    // Implement user signup logic
    const userName = schema.parse(req.body.userName);
    const password = schema.parse(req.body.password);

    // check if user already exist
    const userDetails = await User.findOne({
      userName: userName,
      password: password,
    });
    if (userDetails) {
      return res.status().json({
        success: false,
        message: "User already exists",
      });
    }
    await User.create({
      userName,
      password,
    });
    // return res
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "User Not Signed Up , please try again later",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  return res.status(200).json({
    success:true,
    courses:response,
  })
});

router.post("/courses/:courseId", userMiddleware,async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  console.log(typeof(courseId));
  const userName = req.headers.userName;
  console.log(courseId,userName);
  try{
    await User.findOneAndUpdate({
        userName:userName
      },{
        "$push" : {
            purchasedCourses : courseId
        }
      })
  } catch(e){
    console.error(e);
  }
  return res.status(200).json({
    success:true,
    message:"purchase successfull"
  })
  
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
