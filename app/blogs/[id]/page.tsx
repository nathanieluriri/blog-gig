import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import BlogLargeCard from "./components/bloglargecard";
import Featured from "@/app/components/featured";
import AuthorCard from "./components/authorcard";
import { BASE_URL } from "@/app/util/api";
import { BlogApiResponse, BlogItem } from "@/app/types/blocknoteblog";
import BlockNoteRenderer from "./components/blocknoterenderer";

interface IBlogPageByIdProps {
  params: Promise<{ id: string }>;
}

const BlogPageById: React.FC<IBlogPageByIdProps> = async ({ params }) => {
  const { id } = await params;

  console.log("Category ID:", id);

  let blog: BlogItem;
  const url = `${BASE_URL}/api/v1/articles/content/${id}`;
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
    const data: BlogApiResponse = await res.json();
    blog = data.data || [];
  } catch (error) {
    console.error("Failed to load blogs", error);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <body className={`antialiased bg-[#1A1A1A]`}>
      <Header />
      <main className="2xl:max-w-[1470px] mx-auto">
        <BlogLargeCard
          imageSrc={blog.featureImage.url}
          title={blog.title}
          imageAlt={`Image showing ${blog.featureImage.altText}`}
        />
        <section className="flex flex-col md:grid relative md:grid-cols-12 bg-white md:px-4 py-5">
          <div className="md:col-span-2 pb-10 md:pb-0">
            <AuthorCard
              name={blog.author.name}
              avatarUrl={blog.author.avatarUrl}
              affiliation={blog.author.affiliation}
              date={blog.dateCreated}
            />
          </div>
          <article className="md:col-span-10">
            <BlockNoteRenderer content={blog.currentPageBody} />
          </article>
        </section>
        <section>
          <Featured />
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default BlogPageById;
