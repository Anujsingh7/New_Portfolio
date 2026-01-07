// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {

  return (
    <div className="border border-theme-border hover:border-cyan-400 transition-all duration-500 bg-theme-card rounded-lg relative group"
    >
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#0891b2] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 &&
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            }
          </div>
        </div>
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-blog-heading sm:text-xl font-medium hover:text-cyan-500'>
            {blog.title}
          </p>
        </Link>
        <p className='mb-2 text-sm text-[#0891b2]'>
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className='text-sm lg:text-base text-theme-text-secondary pb-3 lg:pb-6 line-clamp-3'>
          {blog.description}
        </p>
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-cyan-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;