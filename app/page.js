import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${personalData.mediumUsername}`, {
    next: { revalidate: 60 } // Revalidate every 60 seconds
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  // Transform Medium RSS data to match the expected blog structure
  const blogs = data.items.map((item) => ({
    title: item.title,
    description: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || '',
    cover_image: item.thumbnail || 'https://placehold.co/800x400/1a1443/ffffff?text=Blog+Post',
    url: item.link,
    published_at: item.pubDate,
    reading_time_minutes: Math.ceil(item.description?.length / 1000) || 5,
    public_reactions_count: 0,
    comments_count: 0
  }));

  const filtered = blogs.sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};