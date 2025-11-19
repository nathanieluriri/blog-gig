import ArticleLinkCard from "./articlelinkcard";
import FeaturedStoryGrid from "./featuredstorygrid";

const HeroSection = () => {
  return (
    <section>
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
