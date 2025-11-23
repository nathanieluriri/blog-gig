import { BASE_URL } from "@/app/util/api";
import GlobalVideosSection from "./components/globalvideos";
import VideoCarouselSection from "./components/videocarouselsection";
import VideoSectionOne from "./components/videosectionone";
import { MediaApiResponse, MediaItem } from "@/app/types/video";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const VideoBySlugPage = async ({ params }: Props) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id || id === "undefined") {
    return notFound();
  }

  console.log("Category ID:", id);

  // --- Fetch 1: Featured Videos ---
  const featuredRes = await fetch(`${BASE_URL}/api/v1/media/by-type/video`, {
    next: { revalidate: 60 },
  });

  if (!featuredRes.ok) {
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading featured content.</p>
      </section>
    );
  }

  const featuredJson: MediaApiResponse = await featuredRes.json();
  const featuredVideos: MediaItem[] = featuredJson.data?.listOfMedia || [];

  // --- Fetch 2: Category Videos ---
  const categoryUrl = `${BASE_URL}/api/v1/media/by-category/${id}`;
  console.log("Fetching category videos from:", categoryUrl);

  const categoryRes = await fetch(categoryUrl, {
    next: { revalidate: 60 },
  });

  if (!categoryRes.ok) {
    console.error(
      `Failed to fetch category videos for ${id}:`,
      categoryRes.status
    );
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Failed to load videos for category: {id}</p>
      </section>
    );
  }

  let categoryVideos: MediaItem[] = [];

  try {
    const categoryJson: MediaApiResponse = await categoryRes.json();
    categoryVideos = categoryJson.data?.listOfMedia || [];
  } catch (error) {
    console.error("Error parsing category videos JSON:", error);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Invalid data received for this category.</p>
      </section>
    );
  }

  return (
    <main className="bg-white">
      <VideoSectionOne videos={featuredVideos} />
      <VideoCarouselSection videos={categoryVideos} />
      <GlobalVideosSection />
      <VideoCarouselSection videos={categoryVideos} />
    </main>
  );
};

export default VideoBySlugPage;
