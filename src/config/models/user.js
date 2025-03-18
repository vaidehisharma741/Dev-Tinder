const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        emailId:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            validate(value)
            {
                if(!["male","female","other"].includes(value))
                {
                    throw new Error ("gender is not correct");
                }
            }
        },
        photoUrl:{
            type:String,
            default:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Image.png"
        },
        about:{
            type:String,
            default:"This is a default about of the user!"
        },
        skills:{
            type:[String],
        }
    }
)

module.exports = mongoose.model("User",userSchema);
