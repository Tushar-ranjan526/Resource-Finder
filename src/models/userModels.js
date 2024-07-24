import mongoose from 'mongoose';

// humare database ka strucutre.
const userSchema=new mongoose.Schema({
        username:{
            type:String,
            required:[true,"Please provide a username"],
            unique:true
        },
        email:{
            type:String,
            required:[true,"Please provide an email"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"Please provide a password"],
            minlength:[8,"Password should be at least 8 characters long"]
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        forgotPasswordToken:String,
        forgotPasswordTokenExpiry:Date,
        verifyToken:String,
        verifyTokenExpiry:Date
});

// nahi bana to bana do aur bana hai to wo initialize kardo.
const User=mongoose.models.users || mongoose.model("users",userSchema);

export default User;