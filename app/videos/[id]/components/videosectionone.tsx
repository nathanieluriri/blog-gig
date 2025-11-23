import { MediaApiResponse, MediaItem } from "@/app/types/video";
import FeaturedVideoPlayer from "./featuredvideoplayer";
import { BASE_URL } from "@/app/util/api";

const VideoSectionOne = async () => {
  const res = await fetch(`${BASE_URL}/api/v1/media/by-type/video`, {
    cache: "no-cache",
    next: { revalidate: 60 },
  });

  let videos: MediaItem[] = [];

  if (res.ok) {
    const json: MediaApiResponse = await res.json();
    videos = json.data.listOfMedia;
  } else {
    console.error("Failed to fetch videos:", res.status, res.statusText);
    return (
      <section className="py-10 text-center text-gray-500">
        <p>Something went wrong loading the content.</p>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section className="py-20 text-center text-gray-500 bg-black">
        <p>No videos available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="bg-black text-white">
      <FeaturedVideoPlayer videos={videos} />
    </section>
  );
};

export default VideoSectionOne;
