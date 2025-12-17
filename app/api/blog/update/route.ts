import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export async function PUT(request: Request) {
  try {
    const { id, title, slug, excerpt, content, date } = await request.json();

    if (!id || !title || !slug || !excerpt || !content || !date) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myprofilexyz");
    
    const result = await db.collection("blogs").updateOne(
      { _id: new ObjectId(id) },
      { $set: { title, slug, excerpt, content, date, updatedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
