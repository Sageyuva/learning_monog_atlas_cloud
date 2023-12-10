import connectMongoDB from "@/libs/mongodb";
import topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {

        const { title, discription } = await request.json();
        await connectMongoDB();
        await topic.create({ title, discription });
        return NextResponse.json({ message: "posted" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong " }, { status: 500 })
    }
}

export async function GET() {
    await connectMongoDB();
    const topics = await topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}