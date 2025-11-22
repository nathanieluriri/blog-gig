"use client";

import { useRef, useState } from "react";
import VideoShuffleCard from "./videoshufflecard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import VideoPlayer, { VideoPlayerHandle } from "./videoplayer";

interface IVideoData {
  id: string;
  videoName: string;
  videoDescription: string;
  videoUrl: string;
}

const videoQueue: IVideoData[] = [
  {
    id: "1",
    videoName: "Lamar Odom - The Player's Pov",
    videoDescription:
      "Lamar Odom opens up about his journey, struggles, and redemption in this raw interview.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "2",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoDescription:
      "President Obama and Derek Jeter discuss leadership, fatherhood, and life after baseball at the White House.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "3",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoDescription:
      "Go behind the scenes with one of college football's most dominant units.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "4",
    videoName: "The Real Allen Iverson | So ... You Want the Real Story?",
    videoDescription: "Allen Iverson tells his truth — no filter.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: "5",
    videoName: "The Real Oksana Masters | The Players' Tribune",
    videoDescription:
      "Paralympic legend Oksana Masters shares her incredible life story.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "6",
    videoName: "Lamar Odom - The Player's Pov",
    videoDescription:
      "Lamar Odom opens up about his journey, struggles, and redemption in this raw interview.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  },
  {
    id: "7",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoDescription:
      "President Obama and Derek Jeter discuss leadership, fatherhood, and life after baseball at the White House.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: "8",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoDescription:
      "Go behind the scenes with one of college football's most dominant units.",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

const VideoSectionOne: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<IVideoData>(videoQueue[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef<any>(null);
  const videoPlayerRef = useRef<VideoPlayerHandle>(null);

  const handleVideoClick = async (video: IVideoData) => {
    if (video.id === currentVideo.id) {
      if (videoPlayerRef.current) {
        const nowPlaying = videoPlayerRef.current.togglePlay();
        setIsPlaying(nowPlaying);
      }
    } else {
      if (videoPlayerRef.current) {
        videoPlayerRef.current.pause();
      }

      setCurrentVideo(video);
      setIsPlaying(true);

      // Small delay to ensure the new video is mounted before playing
      setTimeout(() => {
        if (videoPlayerRef.current) {
          videoPlayerRef.current.play();
        }
      }, 100);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (index: any) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="grid grid-cols-12 bg-black text-white w-full min-h-[400px] h-fit overflow-hidden">
      <div className="col-span-full md:col-span-8 h-full">
        <div className="w-full aspect-video rounded-lg">
          <VideoPlayer
            ref={videoPlayerRef}
            playing={isPlaying}
            url={currentVideo.videoUrl}
            onPause={handleVideoPause}
            onPlay={handleVideoPlay}
            muted={false}
          />
        </div>
        <div className="px-2">
          <p className="pt-2 text-lg md:text-2xl lg:text-4xl font-semibold text-start">
            {currentVideo.videoName}
          </p>
        </div>
      </div>
      <div className="col-span-full md:col-span-4 w-full h-full px-0 md:px-3 relative">
        <div className="py-2 sticky top-0 z-30">
          <p className="px-2 md:px-0 text-[13px] md:text-sm font-semibold">
            NEXT UP
          </p>
        </div>
        <div
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#374151 #000000",
          }}
          className="hidden md:block overflow-y-scroll -mr-1 scrollbar-thin scrollbar-thumb-gray-800 hover:scrollbar-thumb-gray-700 h-[560px]"
        >
          {videoQueue.map((video) => (
            <VideoShuffleCard
              key={video.id}
              videoName={video.videoName}
              isPlaying={video.id === currentVideo.id && isPlaying}
              isCurrentVideo={video.id === currentVideo.id}
              onClick={() => handleVideoClick(video)}
            />
          ))}
        </div>
        <div className="md:hidden h-full">
          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
              currentClass: "my-custom-bullet-active",
            }}
            grabCursor={true}
            className="h-fit"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {videoQueue.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoShuffleCard
                  videoName={video.videoName}
                  isPlaying={video.id === currentVideo.id && isPlaying}
                  isCurrentVideo={video.id === currentVideo.id}
                  onClick={() => handleVideoClick(video)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center space-x-2 my-4">
            {videoQueue.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionOne;
