import BillboardHero from "./leadstory";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import PortraitStoryCard from "./portraitstorycard";
import { Blog } from "../types/blog";
import { BASE_URL } from "../util/api";

const MostRecent = async () => {
  let blogs: Blog[];
  const url = `${BASE_URL}/api/v1/articles/content/`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
    cache: "no-cache",
  });

  if (!res.ok) {
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Failed to load recent stories.</p>
      </section>
    );
  }

  try {
    const data = await res.json();
    blogs = (data.data?.blogs || []).sort(
      (a: Blog, b: Blog) => (a.itemIndex ?? 999) - (b.itemIndex ?? 999)
    );
  } catch (error) {
    console.error("Failed to parse recent stories data:", error);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  const billBoardRecentData = blogs[0];
  const portraitStoryData = blogs.slice(1, 4);

  return (
    <section className="bg-white px-5 md:px-32 pt-16">
      <div className="flex justify-between items-center border-b border-b-gray-300 pt-2 pb-3 sticky top-[78px] lg:top-[70px] z-40 bg-white">
        <p className="text-sm font-semibold text-black">MOST RECENT</p>
        <Link
          href={"/recent"}
          className="h-7 w-7 rounded-full bg-black flex justify-center items-center"
        >
          <FaArrowRight className="text-white" size={20} />
        </Link>
      </div>
      <div>
        <BillboardHero
          title={billBoardRecentData.title}
          excerpt={billBoardRecentData.excerpt}
          author={billBoardRecentData.author.name}
          imageUrl={billBoardRecentData.featureImage.url}
          href={`/articles/${billBoardRecentData.slug}`}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-5">
        {portraitStoryData.map((blog) => (
          <PortraitStoryCard
            key={blog.slug}
            image={blog.featureImage.url}
            title={blog.title}
            excerpt={blog.excerpt}
            author={blog.author.name}
            href={`/acticles/${blog.slug}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MostRecent;
