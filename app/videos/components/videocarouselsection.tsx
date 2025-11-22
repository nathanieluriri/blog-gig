"use client";

import VideoCard from "./videocard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Autoplay } from "swiper/modules";

interface IVideoData {
  id: string;
  videoName: string;
  videoUrl: string;
  thumbNameUrl: string;
}

const videoQueue: IVideoData[] = [
  {
    id: "1",
    videoName: "Lamar Odom - The Player's Pov",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "2",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "3",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "4",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "5",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "6",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "7",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "8",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "9",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "12",
    videoName: "President Obama And Derek Jeter - Full Conversation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbNameUrl: "/sports.jpg",
  },
  {
    id: "11",
    videoName: "The Making Of The Wisconsin Badgers Offensive Line",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbNameUrl: "/sports.jpg",
  },
];

const VideoCarouselSection = () => {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="max-w-[1200px] h-fit mx-auto mt-10">
      <div className="w-full py-12 md:px-4 relative bg-[#f4f4f4] rounded-lg">
        <div className="flex justify-center items-center absolute -top-4 left-0 w-full">
          <h1 className="bg-black py-1 px-2 text-white text-lg md:text-xl font-semibold">
            FOOTBALL VIDEOS
          </h1>
        </div>
        <div className="cursor-pointer z-10 absolute hidden md:flex justify-between items-center w-full h-full top-0 left-0 pointer-events-none">
          <div
            className="bg-white rounded-r-full p-3 transition-colors duration-200 hover:bg-gray-100 pointer-events-auto"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FiArrowLeft size={40} className="text-black" />
          </div>
          <div
            className="bg-white rounded-l-full p-3 transition-colors duration-200 hover:bg-gray-100 pointer-events-auto"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FiArrowRight size={40} className="text-black" />
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1.5}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            // 510px: 3 slides (1 centered, 2 partial sides)
            510: {
              slidesPerView: 3,
              centeredSlides: true,
              spaceBetween: 15,
            },
            603: {
              slidesPerView: 2.2,
              centeredSlides: true,
              spaceBetween: 15,
            },
            // 716px: 4 slides (2 centered, 2 partial sides)
            722: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 15,
            },
            900: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 12,
            },
            // 1010px: 3 slides (1 centered, 2 partial sides)
            1078: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              centeredSlides: false,
              spaceBetween: 15,
            },
          }}
          className="video-swiper"
        >
          {videoQueue.map((video) => (
            <SwiperSlide key={video.id}>
              <VideoCard
                thumbNameUrl={video.thumbNameUrl}
                videoName={video.videoName}
                videoUrl={video.videoUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoCarouselSection;
