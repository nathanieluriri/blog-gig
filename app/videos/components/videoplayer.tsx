"use client";

import React, { useRef } from "react";
import ReactPlayer from "react-player";
import clsx from "clsx";

interface VideoPlayerProps {
  url: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  playing?: boolean;
  light?: boolean;
  controls?: boolean;
  volume?: number;
  muted?: boolean;
  onStart?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  url,
  className,
  width = "100%",
  height = "100%",
  playing = true,
  light = false, // light=true breaks PiP in many cases
  controls = true,
  volume = 0.8,
  muted = false,
  onStart,
  onPause,
  onEnded,
}) => {
  const playerRef = useRef<any>(null);

  const handleReady = () => {
    const video =
      playerRef.current?.getInternalPlayer() as HTMLVideoElement | null;
    if (
      video &&
      document.pictureInPictureEnabled &&
      !video.disablePictureInPicture
    ) {
      video.requestPictureInPicture().catch(() => {});
    }
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden bg-black",
        "aspect-video w-full",
        className
      )}
      style={{ width, height }}
    >
      <ReactPlayer
        ref={playerRef}
        src={url}
        width="100%"
        height="100%"
        playing={playing}
        controls={controls}
        light={light}
        volume={volume}
        muted={muted}
        onReady={handleReady}
        onStart={onStart}
        onPause={onPause}
        onEnded={onEnded}
        className="absolute top-0 left-0"
      />
    </div>
  );
};

export default VideoPlayer;
