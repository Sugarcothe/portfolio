import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience - Valentine Eze",
  description: "Explore Valentine Eze's professional work experience including roles at Digital Works Technologies, Darey.io, New Horizons, and Pematrix Technology. View live projects and certifications.",
  openGraph: {
    title: "Work Experience - Valentine Eze",
    description: "Explore Valentine Eze's professional work experience including roles at Digital Works Technologies, Darey.io, New Horizons, and Pematrix Technology.",
    url: "https://valentineeze.com/work",
  },
  twitter: {
    title: "Work Experience - Valentine Eze",
    description: "Explore Valentine Eze's professional work experience including roles at Digital Works Technologies, Darey.io, New Horizons, and Pematrix Technology.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}