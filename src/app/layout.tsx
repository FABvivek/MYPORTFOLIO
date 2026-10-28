import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteMetadata } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FF8C59",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  keywords: siteMetadata.keywords,
  authors: [{ name: "Vivek Singh", url: siteMetadata.url }],
  creator: "Vivek Singh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: "Vivek Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vivek Singh",
    jobTitle: "Backend Software Engineer",
    description: siteMetadata.description,
    url: siteMetadata.url,
    sameAs: [
      "https://github.com/FABvivek",
      "https://linkedin.com/in/vivek-singh-072242309",
      "https://leetcode.com/u/fabvivek",
      "https://www.codechef.com/users/fabvivek",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Army Institute of Technology, Pune",
    },
    knowsAbout: [
      "Distributed Systems",
      "Microservices Architecture",
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} scroll-smooth selection:bg-accent/25 selection:text-fg`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg text-fg font-sans antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
        <MotionProvider>
          <LenisProvider>
            <FilmGrain />
            <CursorGlow />
            <Header />
            <main id="main" className="flex-grow">
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
