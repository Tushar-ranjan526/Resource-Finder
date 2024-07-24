import User from '@/models/userModels';
import nodemailer from 'nodemailer';
import bcryptjs from 'bcryptjs';
export const sendEmail=async({email,emailType,userId}:{
    email:string,
    emailType:string,
    userId:string,
  })=>{
    try{
        const hashedToken=await bcryptjs.hash(userId.toString(),10);
        if(emailType ==="VERIFY"){
            await User.findByIdAndUpdate(userId, {verifyToken:hashedToken,verifyTokenExpiry:Date.now()+36000000});
        }else if(emailType ==="RESET"){
            await User.findByIdAndUpdate(userId, {forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+36000000});
        }

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "8be3ed611ce716",
              pass: "********fb07"
            }
          });
          
          const mailOptions={
            from: 'tysingh2924@gmail.com', // sender address
            to: email, // list of receivers
            subject: emailType==="VERIFY"?"Verify your email":"Reset password", // Subject line
            html: `<p><a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Click Here</a> to ${emailType==="VERIFY"?"verify your email":"reset your password"} or copy paste the link in your browser <br>${process.env.DOMAIN}/verifyemail?token=${hashedToken}</p>`, // html body
          };
          const mailResponse=await transport.sendMail(mailOptions);
          return mailResponse;
    }catch(err:any){
            throw new Error(err.message);
    }
}