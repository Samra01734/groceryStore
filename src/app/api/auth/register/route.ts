import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        await connectDb()
  const{name,email,password}=await req.json()
   const existUser=await User.findOne({email})
   if(existUser){
    return NextResponse.json(
        {message:"email  already exist!" }
       {status:400}
    )

   }

   if(password.length)

    }
    catch(error){

    }
}
//conect db
//name, email,pasword
//email check
//password 6 char 
