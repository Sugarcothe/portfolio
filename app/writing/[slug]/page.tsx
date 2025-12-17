import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import clientPromise from "../../../lib/mongodb";
import BlogClient from "./BlogClient";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  likes: number;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const client = await clientPromise;
    const db = client.db();
    const blog = await db.collection('blogs').findOne({ slug });
    
    if (!blog) return null;
    
    return {
      _id: blog._id.toString(),
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      date: blog.date,
      likes: blog.likes || 0
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return {
      title: "Article Not Found - Valentine Eze",
      description: "The requested article could not be found."
    };
  }
  
  return {
    title: `${blog.title} - Valentine Eze`,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://valentineeze.com/writing/${blog.slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: ["Valentine Eze"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    notFound();
  }

  return <BlogClient blog={blog} />;
}