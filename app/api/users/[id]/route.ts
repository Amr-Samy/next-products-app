import { NextRequest, NextResponse } from "next/server";
import { schema } from './../schema';

let users: { id: number, name: string }[] = [
    { "id": 0, "name": "Amr" },
    { "id": 1, "name": "Samy" },
    { "id": 2, "name": "Mohamed" }
];

export function GET(request: NextRequest, { params }: { params: { id: number } }) {

    return NextResponse.json(users[params.id].name);
}

// export function GET(request: NextRequest) {

//     return NextResponse.json([{ id: 1, name: "amr" }, { id: 2, name: "Ali" }]);
// }

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: 'name must be more than threee charaters' }, { status: 400 });
    }
    return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}

export function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
    if (params.id > 10) {
        return NextResponse.json({ error: 'donesnot exist' }, { status: 400 });
    }

    return NextResponse.json({ "msg": "deleted" }, { status: 200 })
}

export async function PUT(request: NextRequest,
    { params }: { params: { id: number } }) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ error: 'name must be more than threee charaters' }, { status: 400 });
    }
    if (params.id > 10)
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    //update the user
    return NextResponse.json({ id: 1, name: body.name })
}