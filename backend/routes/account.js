const express = require('express');
const mongoose = require('mongoose');
const { authenticatemiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

router.get("/balance",authenticatemiddleware,async (req,res)=>{
    const balance = await Account.findOne({
        userId :req.userId
    });
    res.json({
        amount : balance.amount
    })
})