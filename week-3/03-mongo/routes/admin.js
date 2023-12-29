const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const zod = require("zod");
const schema = zod.string();
const numSchema  = zod.number();

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    // Implement user signup logic
    const userName = schema.parse(req.body.userName);
    const password = schema.parse(req.body.password);
    console.log(userName, password);

    // check if user already exist
    const adminDetails = await Admin.findOne({
      userName: userName,
      password: password,
    });
    if (adminDetails != null) {
      return res.status(409).json({
        success: false,
        message: "admin already exists",
      });
    }
    await Admin.create({
      userName,
      password,
    });
    // return res
    return res.status(200).json({
      success: true,
      message: "Admin Created Successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Admin Not Signed Up , please try again later",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {

        // Implement course creation logic
        const title = schema.parse(req.body.title);
        const description = schema.parse(req.body.description);
        const imageLink = schema.parse(req.body.imageLink);
        const price = numSchema.parse(req.body.price);
    
        const courseDetails = await Course.create({
          title,
          description,
          imageLink,
          price,
        });
        console.log(courseDetails);
         res.status(200).json({
          sucess: true,
          messge: "Course created Successfully",
          courseId : courseDetails._id, 
        });
});

router.get("/courses", adminMiddleware, async(req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
   res.status(200).json({
    success:true,
    message:"All courses fetched successfully",
    courses:response
  })
});

module.exports = router;
