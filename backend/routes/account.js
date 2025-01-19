// const express = require('express');
// const mongoose = require('mongoose');
// const { authenticatemiddleware } = require('../middleware');
// const { User,Account } = require('../db');

// const router = express.Router();

// router.get("/balance",authenticatemiddleware,async (req,res)=>{
//     const account = await Account.findOne({
//         userId :req.userId
//     });
//     res.json({
//         balance : account.balance
//     })
// })

// router.post("/transfer",authenticatemiddleware,async (req,res)=>{
// const session = await mongoose.startSession();

// session.startTransaction();
// const {amount , to} =req.body;

// const account =await Account.findOne({userId:req.userId}).session(session);

// if(!account || account.balance<amount){
//     await session.abortTransaction();
//     return res.status(400).json({
//         message : "Insufficient balance"
//     });
// }

// const toAccount = await Account.findOne({ userId: to }).session(session);

// if (!toAccount) {
//     await session.abortTransaction();
//     return res.status(400).json({
//         message: "Invalid account"
//     });
// }

// await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
// await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session);

// await session.commitTransaction();

// res.json({
//     message: "Transfer successful"
// });

// })

// module.exports = router;


//-------------------------------------------------------------------------------------------------------------

const express = require('express');
const mongoose = require('mongoose');
const { authenticatemiddleware } = require('../middleware');
const { User,Account } = require('../db');

const router = express.Router();

router.get("/balance",authenticatemiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId :req.userId
    });
    res.json({
        balance : account.balance
    })
})

router.post("/transfer", authenticatemiddleware, async (req, res) => {
    const { amount, to } = req.body;

    const account = await Account.findOne({
        userId: req.userId
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});
module.exports = router;