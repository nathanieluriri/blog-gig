import FeaturedStoryCard from "./featuredstorycard";

const FeaturedStoryGrid = () => {
  return (
    <section className="pt-2">
      <div className="flex flex-col md:flex-row gap-2">
        <FeaturedStoryCard
          ImgUrl="/black-model.webp"
          headerText="This is where the story starts"
          paragraphText="AJ Dybantsa"
          href="/blogs/this-is-where-the-story-starts"
        />
        <FeaturedStoryCard
          ImgUrl="/wrestlers.webp"
          headerText="Dear Eddie"
          paragraphText="Rey Mysterio"
          href="/blogs/dear-eddie"
        />
        <FeaturedStoryCard
          ImgUrl="/racer.webp"
          headerText="0.00"
          paragraphText="George Russell"
          href="/blogs/0-00"
        />
      </div>
    </section>
  );
};

export default FeaturedStoryGrid;
