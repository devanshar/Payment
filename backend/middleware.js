const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");



// console.log(JWT_SECRET);

const authenticatemiddleware = (req,res,next)=>{
    const authcheck = req.headers.authorization;
    
    if(!authcheck || !authcheck.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    const token = authcheck.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId; // doubt

        next();
    } catch (err) {
        return res.status(403).json({});
    }
}

module.exports={
    authenticatemiddleware
}






