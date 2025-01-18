const express = require("express");
const zod= require("zod");
const {User,Account} = require("../db")
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const { authenticatemiddleware } = require("../middleware");
const router = express.Router();

const signup = zod.object({
    username:zod.string().email(),
    firtsName:zod.string(),
    lastName: zod.string(),
	password: zod.string()
});

const signin = zod.object({
    username:zod.string().email(),
    password:zod.string()
})

const updatebody = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})


router.post("/signup",async (req,res)=>{
    const body = req.body;
    const {success} = signup.safeParse(req.body);
    if(!success){
        return res.json({
            message : "Email Already Taken /Incorrect Inputs"
        })
    }

    const useragain = User.findOne({
        username : body.username
    })

    if(useragain._id){
        return res.json({
            message : "Email Already Taken /Incorrect Inputs"
        })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;
//___________________________
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

//_______________________________________
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})

router.post("/signin",async (req,res)=>{
    const body = req.body;

    const {success} = signin.safeParse(body);
    if(!success){
        return res.json({
            message : "Incorrect Inputs"
        })
    }

    const useragain = User.findOne({
        username : req.body.username
    })

    if(useragain){
        
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);


     res.json({
           token:token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
}),

router.put("/",authenticatemiddleware, async (req,res)=>{
    const body = req.body;
    const{success} = updatebody.safeParse(body);

    if(!success){
        res.status(411).json({
            message :"Error while updating "
        })
    }

    await User.updateOne(req.body,{
        id:req.userId             // doubt
    })

    res.json({
        message :" Updated Successfully"
    })
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{  
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
module.exports = router;