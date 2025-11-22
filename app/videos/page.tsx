"use client";

import { useState } from "react";
import VideoShuffleCard from "./components/videoshufflecard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper/modules";
import VideoPlayer from "./components/videoplayer";

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

const VideoPage: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<IVideoData>(videoQueue[0]);

  const handleVideoClick = (video: IVideoData) => {
    setCurrentVideo(video);
  };

  return (
    <main className="bg-white">
      <section className="grid grid-cols-12 bg-black text-white w-full h-[620px] md:h-[650px]">
        <div className="col-span-full md:col-span-8 h-full">
          <div className="w-full h-[300px] md:h-[500px]">
            <VideoPlayer url={currentVideo.videoUrl} />
          </div>
          <div className="px-2">
            <p className="text-2xl md:text-4xl font-semibold text-start md:text-justify">
              {currentVideo.videoName}
            </p>
            <p className="py-2 md:py-5">{currentVideo.videoDescription}</p>
          </div>
        </div>
        <div className="col-span-full md:col-span-4 w-full h-full px-2 md:px-5 relative">
          <div className="py-2 sticky top-0 z-30">
            <p className="px-2 md:0 text-sm font-semibold">NEXT UP</p>
          </div>
          <div className="hidden md:block overflow-y-scroll -mr-1 scrollbar-thin scrollbar-thumb-gray-800 hover:scrollbar-thumb-gray-700 h-[560px]">
            {videoQueue.map((video) => (
              <VideoShuffleCard
                key={video.id}
                videoName={video.videoName}
                isPlaying={video.id === currentVideo.id}
                onClick={() => handleVideoClick(video)}
              />
            ))}
          </div>
          <div className="md:hidden h-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              className="h-fit"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
            >
              {videoQueue.map((video) => (
                <SwiperSlide key={video.id}>
                  <div>
                    <VideoShuffleCard
                      videoName={video.videoName}
                      isPlaying={video.id === currentVideo.id}
                      onClick={() => handleVideoClick(video)}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VideoPage;
