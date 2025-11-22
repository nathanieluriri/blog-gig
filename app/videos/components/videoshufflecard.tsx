import { LuPlay } from "react-icons/lu";
import clsx from "clsx";

interface IVideoShuffleCard {
  videoName: string;
  isPlaying?: boolean;
  onClick: () => void;
}

const VideoShuffleCard: React.FC<IVideoShuffleCard> = ({
  videoName,
  onClick,
  isPlaying = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "group grid grid-cols-12 items-center gap-4 px-4 py-5 rounded-xl cursor-pointer",
        "transition-all duration-300 ease-out",
        "hover:bg-white/5",
        isPlaying
          ? "bg-cyan-900/30 border border-cyan-800/50"
          : "bg-transparent border border-transparent"
      )}
    >
      <div className="col-span-10 flex flex-col">
        <p
          className={clsx(
            "text-sm font-medium truncate transition-colors duration-300",
            isPlaying ? "text-cyan-400" : "text-gray-300 group-hover:text-white"
          )}
        >
          {videoName}
        </p>

        <p
          className={clsx(
            "text-xs font-medium mt-1 transition-all duration-300",
            isPlaying
              ? "text-cyan-400 opacity-100"
              : "text-transparent opacity-0"
          )}
        >
          Playing now
        </p>
      </div>
      <div className="col-span-2 flex justify-end">
        {isPlaying ? (
          <div className="w-5 h-5 bg-cyan-400 rounded-full animate-pulse" />
        ) : (
          <LuPlay
            size={20}
            className="text-gray-500 group-hover:text-white transition-colors duration-300"
          />
        )}
      </div>
    </div>
  );
};

export default VideoShuffleCard;

// import { LuPlay } from "react-icons/lu";
// import clsx from "clsx";

// interface IVideoShuffleCard {
//   videoName: string;
//   isPlaying?: boolean;
//   onClick: () => void;
// }

// const VideoShuffleCard: React.FC<IVideoShuffleCard> = ({
//   videoName,
//   onClick,
//   isPlaying = false,
// }) => {
//   return (
//     <div
//       className={clsx(
//         "grid grid-cols-12 items-center pt-4 cursor-pointer transition duration-150 ease-in-out",
//         isPlaying ? "text-white" : "text-gray-300"
//       )}
//       onClick={onClick}
//     >
//       <div className="flex flex-col gap-8 col-span-10">
//         <div>
//           <p className="text-sm font-semibold">{videoName}</p>
//         </div>
//         <div className="border-b-2 border-b-gray-400 pb-2 col-span-2">
//           <p className="text-sm font-semibold">
//             {isPlaying ? "Playing..." : ""}
//           </p>
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <LuPlay className="cursor-pointer" size={20} />
//       </div>
//     </div>
//   );
// };

// export default VideoShuffleCard;
