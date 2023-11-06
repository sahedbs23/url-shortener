import {NextResponse, NextRequest} from "next/server";


// Handles GET requests to /api
export async function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({
       status : 'ok'
    });
}



// Handles POST requests to /api
export async function POST(req: Request) {
    const body : {url:string} = await req.json();

    return NextResponse.json({
        longUrl: body.url,
        shortUrl:body.url
    });
}