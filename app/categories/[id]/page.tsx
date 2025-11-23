import React from "react";
import CategoryLargeCard from "./components/categorylargecard";
import { BASE_URL } from "@/app/util/api";
import { Blog } from "@/app/types/blog";
import BlogList from "./components/bloglist";

interface Props {
  params: Promise<{ id: string }>;
}

const CategoryPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;

  console.log("Category ID:", id);

  let blogs: Blog[];
  const url = `${BASE_URL}/api/v1/articles/content/by-category-slug/${id}?start=${0}&stop=${9}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Failed to load blogs for {id}.</p>
      </section>
    );
  }

  try {
    const data = await res.json();
    blogs = data.data?.blogs || [];
  } catch (error) {
    console.error("Failed to load blogs", error);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  if (blogs.length === 0) {
    return null;
  }

  const categoryName = blogs[0].category.name;

  return (
    <section className="bg-white">
      <div>
        <CategoryLargeCard
          title={categoryName}
          imageSrc="/hands_raised.webp"
          imageAlt={`${id} image`}
        />
      </div>
      <div>
        <BlogList categoryId={id} initialBlogs={blogs} />
      </div>
    </section>
  );
};

export default CategoryPage;
