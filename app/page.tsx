import Featured from "./components/featured";
import Herosection from "./components/herosection";
import MostRecent from "./components/mostrecent";

export default function Home() {
  return (
    <>
      <Herosection />
      <MostRecent />
      <Featured />
    </>
  );
}
