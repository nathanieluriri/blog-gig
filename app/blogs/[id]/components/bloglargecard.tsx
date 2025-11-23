import Image from "next/image";
import { IoShareOutline } from "react-icons/io5";

interface IBlogLargeCard {
  imageSrc: string;
  imageAlt?: string;
  title: string;
}

const BlogLargeCard: React.FC<IBlogLargeCard> = ({
  imageSrc,
  imageAlt,
  title,
}) => {
  return (
    <div className="min-h-[150px] max-h-[90vh] h-[350px] sm:h-[500px] md:min-h-[400px] md:h-screen w-full overflow-hidden">
      <div className="group relative h-full w-full">
        <Image
          src={imageSrc}
          alt={imageAlt || "Blog Image"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute bottom-14 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-bold text-white leading-tight">
              {title}
            </h2>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col justify-end p-6">
          <h2 className="text-white">Samuel Adekolu Oluwaseun</h2>
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col justify-end p-6">
          <IoShareOutline className="text-white cursor-pointer" size={45} />
        </div>
      </div>
    </div>
  );
};

export default BlogLargeCard;
