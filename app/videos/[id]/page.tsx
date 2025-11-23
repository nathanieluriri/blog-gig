import GlobalVideosSection from "./components/globalvideos";
import VideoCarouselSection from "./components/videocarouselsection";
import VideoSectionOne from "./components/videosectionone";

interface Props {
  params: Promise<{ id: string }>;
}

const VideoBySlugPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;

  console.log("Category ID:", id);

  return (
    <main className="bg-white">
      <VideoSectionOne />
      <VideoCarouselSection id={id} />
      <GlobalVideosSection />
      <VideoCarouselSection id={id} />
    </main>
  );
};

export default VideoBySlugPage;
