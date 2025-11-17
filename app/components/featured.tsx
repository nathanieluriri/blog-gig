import BillboardHero from "./leadstory";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import PortraitStoryCard from "./portraitstorycard";

const Featured = () => {
  return (
    <section className="bg-white px-5 md:px-32 pt-16">
      <div className="flex justify-between items-center border-b border-b-gray-300 pb-3 sticky top-[81px] lg:top-[70px] z-40 bg-white">
        <p className="text-sm font-semibold text-black">FEATURED STORY</p>
        <Link
          href={"/featured"}
          className="h-7 w-7 rounded-full bg-black flex justify-center items-center"
        >
          <FaArrowRight className="text-white" size={20} />
        </Link>
      </div>
      <div>
        <BillboardHero
          title="Thank You For Being Perfect, John"
          excerpt="Meredith Gaudreau remembers the John she knew: “Thank you for the very best years of my life. Thank you for making us a family. Thank...”"
          author="Meredith Gaudreau"
          imageUrl="/family_image.webp"
          href="/blogs/charlotte-flair-today"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-5">
        <PortraitStoryCard
          image="/jordan-love.webp"
          title="None of This Was Supposed to Happen"
          excerpt="Jordan Love in his own words: “Without that brotherhood of football, I never would have made it.”"
          author="Jordan Love"
          href="/blogs/none-of-this-was-supposed-to-happen"
        />
        <PortraitStoryCard
          image="/liverpool.webp"
          title="A Beautiful Suffering"
          excerpt="Alexis Mac Allister on winning a World Cup for Argentina, the brotherhood of Liverpool FC, and the legacy of Diogo:”"
          author="Alexis Mac Allister"
          href="/blogs/none-of-this-was-supposed-to-happen"
        />
        <PortraitStoryCard
          image="/art.webp"
          title="Two In One: The Briscoe Story"
          excerpt="Mark Briscoe and the Pugh family share the story of how The Briscoe Brothers built a dynasty over a 20+ year career"
          author="Mark Briscoe"
          href="/blogs/none-of-this-was-supposed-to-happen"
        />
      </div>
    </section>
  );
};

export default Featured;
