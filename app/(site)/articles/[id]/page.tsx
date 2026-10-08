import React from "react";
import CategoryLargeCard from "./components/categorylargecard";
import { BASE_URL } from "@/app/util/api";
import { Blog } from "@/app/types/blog";
import BlogList, { PAGE_SIZE } from "./components/bloglist";

interface Props {
  params: Promise<{ id: string }>;
}

const CategoryPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;

  let blogs: Blog[];
  const url = `${BASE_URL}/api/v1/articles/content/by-category-slug/${id}?start=0&stop=${PAGE_SIZE}`;
  const [res, categoriesRes] = await Promise.all([
    fetch(url, { next: { revalidate: 60 } }),
    fetch(`${BASE_URL}/api/v1/articles/content/categories`, { next: { revalidate: 3600 } }),
  ]);
  const categories: { slug: string; imageUrl: string | null }[] = categoriesRes.ok
    ? ((await categoriesRes.json()).data?.listOfCategories ?? [])
    : [];
  const heroImage = categories.find((c) => c.slug === id)?.imageUrl ?? "/hands_raised.webp";

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
    return (
      <section>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="text-gray-400 text-lg mb-2">📭</div>
          <h3 className="text-white text-xl font-semibold mb-2">
            No articles yet
          </h3>
          <p className="text-gray-400">
            There are no published articles in this category yet. Check back soon.
          </p>
        </div>
      </section>
    );
  }

  const categoryName = blogs[0].category.name;

  return (
    <section className="bg-white">
      <div>
        <CategoryLargeCard
          title={categoryName}
          imageSrc={heroImage}
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
