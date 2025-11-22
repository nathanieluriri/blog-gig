import Image from "next/image";
import PlayButtonOverlay from "./playbuttonoverlay";

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
        <PlayButtonOverlay />
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
