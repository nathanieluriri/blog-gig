import Featured from "@/app/components/featured";
import HeroSection from "@/app/components/herosection";
import MostRecent from "@/app/components/mostrecent";

const Home = () => {
  return (
    <section className="2xl:max-w-[1470px] mx-auto">
      <HeroSection />
      <MostRecent />
      <Featured />
    </section>
  );
};

export default Home;
