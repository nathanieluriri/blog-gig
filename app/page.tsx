import FeaturedStoryGrid from "./components/featuredstorygrid";
import Header from "./components/header";
import Herosection from "./components/herosection";

export default function Home() {
  return (
    <>
      <Header />
      <section className="px-0 2xl:px-16 bg-black/85">
        <Herosection />
        <FeaturedStoryGrid />
      </section>
    </>
  );
}
