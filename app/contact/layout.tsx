import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Valentine Eze",
  description: "Get in touch with Valentine Eze for technical consulting, project collaboration, or speaking opportunities. Schedule a meeting or send a message.",
  openGraph: {
    title: "Contact - Valentine Eze",
    description: "Get in touch with Valentine Eze for technical consulting, project collaboration, or speaking opportunities.",
    url: "https://valentineeze.com/contact",
  },
  twitter: {
    title: "Contact - Valentine Eze",
    description: "Get in touch with Valentine Eze for technical consulting, project collaboration, or speaking opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}