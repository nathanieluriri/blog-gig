import CategoryCard from "./components/categorycard";
import CategoryLargeCard from "./components/categorylargecard";

const CategoryPage = () => {
  return (
    <section>
      <div>
        <CategoryLargeCard
          title="Categories"
          imageSrc="/hands_raised.webp"
          imageAlt="categories img"
        />
      </div>
      <div className="px-5 lg:px-28 2xl:px-36 mt-6">
        <div className="flex justify-start items-center border-b border-b-gray-300 pt-2 pb-3 sticky top-[78px] lg:top-[70px] z-40 bg-white">
          <p className="text-sm font-semibold text-black">ALL CATEGORIES</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <CategoryCard
            image="/black-model.webp"
            title="This Is Where the Story Starts"
            excerpt="AJ Dybantsa’s story begins in Brockton, Massachusetts: “I know the position I’m in. I’m blessed to be here.”"
            author="AJ Dybantsa"
            href="/category/a"
          />
          <CategoryCard
            image="/charlotte_image.webp"
            title="NINE TO FIVE"
            excerpt="Ausar Thompson writes about Detroit’s long journey to the postseason — and how this group can level up: “Life comes at you fast in this league. One season you’re 14–68, the next, you’re in the playoffs.”"
            author="Ausar Thompson"
            href="/category/b"
          />
          <CategoryCard
            image="/hero-section_image.webp"
            title="SAMIXX YASUKE"
            excerpt="AJ Dybantsa’s story begins in Brockton, Massachusetts: “I know the position I’m in. I’m blessed to be here.”"
            author="AJ Dybantsa"
            href="/category/a"
          />
          <CategoryCard
            image="/jordan-love.webp"
            title="This Is Where the Story Starts"
            excerpt="Ausar Thompson writes about Detroit’s long journey to the postseason — and how this group can level up: “Life comes at you fast in this league. One season you’re 14–68, the next, you’re in the playoffs.”"
            author="Ausar Thompson"
            href="/category/b"
          />
          <CategoryCard
            image="/black-model.webp"
            title="This Is Where the Story Starts"
            excerpt="AJ Dybantsa’s story begins in Brockton, Massachusetts: “I know the position I’m in. I’m blessed to be here.”"
            author="AJ Dybantsa"
            href="/category/a"
          />
          <CategoryCard
            image="/charlotte_image.webp"
            title="This Is Where the Story Starts"
            excerpt="Ausar Thompson writes about Detroit’s long journey to the postseason — and how this group can level up: “Life comes at you fast in this league. One season you’re 14–68, the next, you’re in the playoffs.”"
            author="Ausar Thompson"
            href="/category/b"
          />
        </div>
        <div className="flex justify-center items-center mt-8 mb-2">
          <button className="bg-black/90 text-white font-semibold w-full lg:w-[31%] lg:max-w-[350px] py-3 cursor-pointer">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
