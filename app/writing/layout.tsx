import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Blog - Valentine Eze",
  description: "Read Valentine Eze's latest articles and insights on software development, cloud computing, system architecture, and technology trends. Subscribe to the newsletter for updates.",
  openGraph: {
    title: "Writing & Blog - Valentine Eze",
    description: "Read Valentine Eze's latest articles and insights on software development, cloud computing, system architecture, and technology trends.",
    url: "https://valentineeze.com/writing",
  },
  twitter: {
    title: "Writing & Blog - Valentine Eze",
    description: "Read Valentine Eze's latest articles and insights on software development, cloud computing, system architecture, and technology trends.",
  },
};

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}