import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    jwt.verify(token, process.env.JWT_SECRET!);
    
    const { blogTitle, blogSlug } = await request.json();

    const client = await clientPromise;
    const db = client.db();
    const subscribers = await db.collection('subscribers').find({ active: true }).toArray();

    if (subscribers.length === 0) {
      return NextResponse.json({ message: 'No subscribers to notify' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const blogUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/writing/${blogSlug}`;

    const emailPromises = subscribers.map(subscriber => 
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: subscriber.email,
        subject: `New Blog Post: ${blogTitle}`,
        html: `
          <h2>New Blog Post Published!</h2>
          <p>Hi there,</p>
          <p>I've just published a new blog post: <strong>${blogTitle}</strong></p>
          <p><a href="${blogUrl}" style="background: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Read Article</a></p>
          <p>Best regards,<br>Valentine Eze</p>
        `
      })
    );
    
    await Promise.all(emailPromises);

    return NextResponse.json({ message: `Notifications sent to ${subscribers.length} subscribers` });
  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json({ error: 'Failed to send notifications', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}