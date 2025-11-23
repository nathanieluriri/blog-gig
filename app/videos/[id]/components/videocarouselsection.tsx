import { MediaApiResponse, MediaItem } from "@/app/types/video";
import VideoCarousel from "./videocarousel";
import { BASE_URL } from "@/app/util/api";

interface IVideoCarouselSectionProps {
  id: string;
}

const VideoCarouselSection: React.FC<IVideoCarouselSectionProps> = async ({
  id,
}) => {
  let videos: MediaItem[];

  const url = `${BASE_URL}/api/v1/media/by-category/${id}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
    cache: "no-cache",
  });

  if (!res.ok) {
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Failed to load videos for {id}.</p>
      </section>
    );
  }

  try {
    const data: MediaApiResponse = await res.json();
    videos = data.data?.listOfMedia || [];
  } catch (error) {
    console.error("Failed to load blogs", error);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  if (videos.length === 0) {
    return null;
  }

  return (
    <section>
      <VideoCarousel videos={videos} />
    </section>
  );
};

export default VideoCarouselSection;
