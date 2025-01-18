const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
const app = express();
const port=3000;

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("api/v1",mainRouter);

// api/v1/user/signup
// api/v1/user/signin
// api/v1/user/chnagepassword..


// api/v1/account/transfermoney
// api/v1/user/balance


app.listen(port,()=>{
    console.log("Less Goo server is on : 3000");
})

