import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModels';
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import { sendEmail } from '@/helpers/mailer';

connect();



export async function POST(request:NextRequest){
        try{
            const reqBody=await request.json();
            const {username,email,password}=reqBody;
            console.log(reqBody);
            const user=await User.findOne({email});
            if(user){
                return NextResponse.json({error:'User already exists'},{status:400});
            }

            // hashing the password for security.
            const salt=await bcryptjs.genSalt(10);
            var hash = await bcryptjs.hash(password, salt);

            // saving in database
            const newUser=new User({username,email,password:hash});
            const savedUser=await newUser.save();
            
            // send email.
            // await sendEmail({email,emailType:"VERIFY",userId:savedUser._id});
            return NextResponse.json({message:'User registered successfully',success:true,savedUser});

        }catch(err:any){
            console.log("there is something wrong in getting request")
            return NextResponse.json({error:err.message},{status:500});
        }
}