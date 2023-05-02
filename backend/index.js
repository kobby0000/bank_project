const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const user = require("./modules/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const salt = bcrypt.genSaltSync(10);
const secret = "ufdfhfkjkufujdjhdffuifjidijidki"; 
const app = express();
app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect("mongodb+srv://bank_login:90d01D4P5W08TjCC@cluster0.avlel7w.mongodb.net/?retryWrites=true&w=majority")

app.post("/register", async(req,res) => {
    const {username,password} = req.body;
    try{
        const userDoc = await user.create({
            username,
            password : bcrypt.hashSync(password, salt),
        })
        res.json(userDoc);                   
    } catch(e) {
        res.status(400).json(e)
    }
});

app.post("/login", async (req, res) => { 
    const {username, password} = req.body;
    const userDoc = await user.findOne({username});
    const passValid = bcrypt.compareSync(password, userDoc.password);
    if (passValid) {
        //logged in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err,token) =>{
            if (err) throw err;
            res.cookie("token", token).json({
                id:userDoc._id,
                username,
            });
        })
    } else {
        res.status(400).json('wrong credentioals');
    }
} )

app.get("/profile", (req,res) => {
    const { token = null } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post("/logout", (req, res) => {
    res.cookie("token", "").json('ok');
})

app.listen(4000, ()=> {
    console.log('database connected and running on port 4000');
});