import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import Herosection from "./components/herosection";
import MostRecent from "./components/mostrecent";

const Home = () => {
  return (
    <>
      <body className={`antialiased bg-[#1A1A1A]`}>
        <Header />
        <main className="2xl:max-w-[1470px] mx-auto">
          <Herosection />
          <MostRecent />
          <Featured />
        </main>
        <Footer />
      </body>
    </>
  );
};

export default Home;
