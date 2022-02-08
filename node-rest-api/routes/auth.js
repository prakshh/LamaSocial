const router = require("express").Router();
const User = require("../models/User");

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
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try{
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err){
        console.log(err);
    }
})

module.exports = router