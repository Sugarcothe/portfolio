import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET!);
    
    const client = await clientPromise;
    const db = client.db();
    const subscribers = await db.collection('subscribers').find({ active: true }).sort({ subscribedAt: -1 }).toArray();

    return NextResponse.json({ subscribers });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
  }
}