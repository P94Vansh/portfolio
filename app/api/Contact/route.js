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
        const response = NextResponse.json({ success: true }, { status: 200 });
        response.headers.set('Access-Control-Allow-Origin', 'https://portfolio-do03sz39d-p94vanshs-projects.vercel.app');
        response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;

    }
    catch(e){
        console.log(e.message);
        const response = NextResponse.json({ success: false }, { status: 404 });
        response.headers.set('Access-Control-Allow-Origin', 'https://portfolio-do03sz39d-p94vanshs-projects.vercel.app');
        response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

        return response;

    }
}