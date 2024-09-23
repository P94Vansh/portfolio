import connectDB from "@/db/connectDB";
import ContactForm from "@/models/ContactForm";
import { NextResponse } from "next/server";
export async function POST(request) {
    try{
        await connectDB();
        const body=await request.json()
        let details=new ContactForm({
            name:body.name,
            email:body.email,
            message:body.message
        })
        await details.save()
        return NextResponse.json({success:true},{status:200})

    }
    catch(e){
        return  NextResponse.json({success:false},{status:404})

    }
}