import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { blogId } = await request.json();

    if (!blogId) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myprofilexyz");
    
    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(blogId) },
      { $inc: { likes: 1 } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    const blog = await db.collection("blogs").findOne({ _id: new ObjectId(blogId) });
    
    return NextResponse.json({ likes: blog?.likes || 0 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}