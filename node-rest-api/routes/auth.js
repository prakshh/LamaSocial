const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// router.get("/", (req,res) => {
//     res.send("hey, its auth route");
// })

// //REGISTER - testing
// router.get("/register", async (req, res) => {
//     const user = await new User({
//         username: "wick",
//         email: "wick@gmail.com",
//         password: "7891011"
//     })
//     await user.save();
//     res.send("ok");
// })

//REGISTER
router.post("/register", async (req, res) => {
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
})

module.exports = router