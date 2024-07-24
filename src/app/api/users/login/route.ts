import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModels';
import { NextRequest,NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


connect();

export async function POST(request:NextRequest){
    try{
        const reqBody=await request.json();
        const {username,email,password}=reqBody;
        console.log(reqBody);
        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User doesnot exist"},{status:400});
        }
        console.log("User exist");
        const validpass=await bcryptjs.compare(password,user.password);
        if(!validpass){
            return NextResponse.json({error:"Password doesn't match"},{status:400});
        }
        const tokenData={
            id:user._id,
            username:user.username,
        };
        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{ expiresIn:'1d' });
        const response=NextResponse.json({
            message:"Signed in successfully",
            success:true
        })
        response.cookies.set("token",token,{
            httpOnly:true
        })
        return response;

    }catch(err:any){
        console.log("Error in Login");
        return NextResponse.json({error:err.message},{status:500});
    }
}