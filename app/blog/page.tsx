import Featured from "../components/featured";
import HeroSection from "../components/herosection";
import MostRecent from "../components/mostrecent";

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
