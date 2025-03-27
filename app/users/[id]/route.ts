import { NextResponse } from "next/server";
import { User } from "../route";


export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const { id } = await  params;

    const userId = parseInt(id, 10); // parse the id to an int with base 10;
    if(isNaN(userId)) {
       return NextResponse.json({ error: 'Invalid id'} , { status : 400})
    }


    const user = User.find((data) => data.id === userId);
    if(!user) {
        return NextResponse.json({ error: 'User not found'} , { status : 404})
    }
    return Response.json(user);
}