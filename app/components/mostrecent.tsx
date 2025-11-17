import BillboardHero from "./leadstory";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const MostRecent = () => {
  return (
    <section className="bg-white px-5 md:px-32 pt-16">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-3">
        <p className="text-sm font-semibold text-black">MOST RECENT</p>
        <Link
          href={"/recent"}
          className="h-7 w-7 rounded-full bg-black flex justify-center items-center"
        >
          <FaArrowRight className="text-white" size={20} />
        </Link>
      </div>
      <div>
        <BillboardHero
          title="How Am I Going to Be Charlotte Flair Today?"
          excerpt="Charlotte Flair wrote about…………. everything: “This isn’t for my haters. Honestly, this isn’t even for my fans. This is for myself.”"
          author="Ashley Fliehr"
          imageUrl="/charlotte_image.webp"
          href="/blogs/charlotte-flair-today"
        />
      </div>
    </section>
  );
};

export default MostRecent;
