import { FaPlay } from "react-icons/fa";
import Image from "next/image";

interface IVideoData {
  videoName: string;
  videoUrl: string;
  thumbNameUrl: string;
}

const VideoCard: React.FC<IVideoData> = ({
  videoName,
  videoUrl,
  thumbNameUrl,
}) => {
  return (
    <div className="group cursor-pointer w-full h-[370px] bg-white rounded-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[190px] w-full bg-gray-200">
        <Image className="object-cover" src={thumbNameUrl} alt="Sports" fill />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 transition-opacity duration-300">
          <div className="flex justify-center items-center bg-white/35 rounded-full p-3 sm:p-4 transform scale-100 group-hover:scale-110 transition-transform duration-300">
            <FaPlay className="text-white text-sm sm:text-lg" />
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-start space-x-2">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-black leading-tight">
              {videoName}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
