const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
console.log("sany0")


// router.post(
//   "/createusers",
//   [
//     body("name").isString(),
//     body("email").isEmail(),
//     body("password", "Incorrect password").isLength({ min: 5 }),
//     body("location").isString(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         location: req.body.location,
//       });
//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

router.post(
  "/loginusers",
  [
    body("email").isEmail(),
    body("password", "Incorrect password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log("Login route hit");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    // console.log("User Data:", userData);
    try {
      console.log("DEBUUUUUG");
      
      console.log(email, req.body.password);
      
      let userData = await User.findOne({email});



      if (userData) {
        console.log("User Data:", userData); // Log userData only if it exists
      } else {
        console.log("No user found with the provided email."); // Log if no user found
      }



      // if (!userData) {
      //   return res.status(400).json({ message: "Invalid email or password" });
      // }
      // console.log("Entered Password:", req.body.password); // Log entered password
      // console.log("Stored Password:", userData.password); // Log stored password

      if (req.body.password.trim() !== userData.password.trim()) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      res.json({ success: true });
    } catch (error) {
      console.log("Error fetching user:", error); // Log any errors during the query
      res.json({ success: false });
    }
  }
);




module.exports = router;
