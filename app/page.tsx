import Featured from "./components/featured";
import Footer from "./components/footer";
import Header from "./components/header";
import Herosection from "./components/herosection";
import MostRecent from "./components/mostrecent";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <MostRecent />
      <Featured />
      <Footer />
    </>
  );
}
