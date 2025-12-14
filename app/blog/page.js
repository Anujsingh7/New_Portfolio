// @flow strict

import { personalData } from "@/utils/data/personal-data";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${personalData.mediumUsername}`)

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

  return blogs;
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Blog
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;