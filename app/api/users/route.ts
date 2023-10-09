import { NextRequest, NextResponse } from "next/server";

let users: { id: number, name: string }[] = [
    { "id": 0, "name": "Amr" },
    { "id": 1, "name": "Samy" },
    { "id": 2, "name": "Mohamed" }
];

export function GET(request: NextRequest, { params }: { params: { id: number } }) {

    return NextResponse.json(users[params.id].name);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    if (!body.name) return (NextResponse.json({ error: 'name is required' }, { status: 400 }))
    else return NextResponse.json([{ id: 1, name: body.name }, { status: 201 }])
}