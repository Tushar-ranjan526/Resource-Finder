import { connect } from '@/dbConfig/dbConfig';
import { NextRequest,NextResponse } from 'next/server';


connect();


export async function POST(){
    try{
            const response=NextResponse.json({
                message:'User logged out successfully',
                success:true
            })
            response.cookies.set("token","",{
                httpOnly:true,
            })
            return response;
    }
    catch(err:any){
       return NextResponse.json({error:err.message},{status:500});
    }
}