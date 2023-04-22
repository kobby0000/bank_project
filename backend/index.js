const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());


app.get("/test", (req,res) => {
    res.json("test ok");
});

app.post("/login", async(req, res) =>{
    const {username, password} = req.body;
    const userValid = await username.find({username:username});
    res.json(userValid);
} )

app.listen(4000);