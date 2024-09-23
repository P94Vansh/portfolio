import connectDB from "@/db/connectDB";
import ContactForm from "@/models/ContactForm";

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();

        let details = new ContactForm({
            name: body.name,
            email: body.email,
            message: body.message,
        });
        await details.save();

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': 'https://portfolio-a39b5eock-p94vanshs-projects.vercel.app',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json',
            },
        });
    } catch (e) {
        return new Response(JSON.stringify({ success: false }), {
            status: 404,
            headers: {
                'Access-Control-Allow-Origin': 'https://portfolio-a39b5eock-p94vanshs-projects.vercel.app',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Content-Type': 'application/json',
            },
        });
    }
}

// Handle OPTIONS requests for preflight
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': 'https://portfolio-a39b5eock-p94vanshs-projects.vercel.app',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
