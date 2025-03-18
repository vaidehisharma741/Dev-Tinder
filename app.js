const express = require("express");
const app = express();
const connectDB = require("./src/config/database");
const User = require("./src/config/models/user");
app.use(express.json());
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    await user.save();
    return res.send("user added successfully");
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.get("/feed", async(req, res) => {
  const userEmail = req.body.emailId;
  try
  {
    const user = await User.find({emailId:userEmail});
    if(user.length === 0)
    {
      return res.status(404).json("user not found");
    }
    else
    {
      return res.send(user);  
    }
  }
  catch(error)
  {
    return res.status(400).json("something went wrong");
  }
});


app.patch("/update",async(req,res)=>
{
  const userId = req.body.userId;
  const data = req.body;
  try
  {
    await User.findByIdAndUpdate({_id:userId},data,{runValidators:true});
    return res.send("user updated successful");``
  }
  catch(error)
  {
    return res.status(400).json(error.message);
  }
})
connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("app is working on port 3000");
    });
  })
  .catch((error) => {
    console.log(error, "database cannot be connected");
  });
