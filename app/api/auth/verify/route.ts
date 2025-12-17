import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token required" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; email: string };
    
    const client = await clientPromise;
    const db = client.db("myprofilexyz");
    
    const user = await db.collection("users").findOne({ _id: new ObjectId(decoded.userId) });
    
    if (!user) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    return NextResponse.json({ valid: true, user: { id: user._id, email: user.email } }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}