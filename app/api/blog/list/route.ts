import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("myprofilexyz");
    
    const blogs = await db.collection("blogs")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
