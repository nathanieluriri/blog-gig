import { AnimatedPage } from "../components/animatedpage";
import Header from "../components/header";
import Footer from "../components/footer";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <AnimatedPage>{children}</AnimatedPage>
      <Footer />
    </>
  );
}
