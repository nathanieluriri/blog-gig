import ArticleLinkCard from "./articlelinkcard";
import FeaturedStoryGrid from "./featuredstorygrid";

const HeroSection = () => {
  return (
    <section className="px-0 2xl:px-16 bg-black/85">
      <ArticleLinkCard
        imageSrc="/hero-section_image.webp"
        href="/blogs/letter-to-my-younger-self"
        title="Letter to my younger self"
        author="Aaron Donald"
      />
      <FeaturedStoryGrid />
    </section>
  );
};

export default HeroSection;
