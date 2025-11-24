import Featured from "./components/featured";
import Herosection from "./components/herosection";
import MostRecent from "./components/mostrecent";

const Home = () => {
  return (
    <section className="2xl:max-w-[1470px] mx-auto">
      <Herosection />
      <MostRecent />
      <Featured />
    </section>
  );
};

export default Home;
