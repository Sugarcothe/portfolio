import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    
    // Check if email already exists
    const existingSubscriber = await db.collection('subscribers').findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }

    // Add new subscriber
    await db.collection('subscribers').insertOne({
      email,
      subscribedAt: new Date(),
      active: true
    });

    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}