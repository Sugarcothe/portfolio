import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { title, slug, excerpt, content, date, imageUrl } = await request.json();

    if (!title || !slug || !excerpt || !content || !date) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myprofilexyz");
    
    const existing = await db.collection("blogs").findOne({ slug });
    if (existing) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
    }

    const result = await db.collection("blogs").insertOne({
      title,
      slug,
      excerpt,
      content,
      date,
      imageUrl: imageUrl || null,
      likes: 0,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Blog created", id: result.insertedId }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
