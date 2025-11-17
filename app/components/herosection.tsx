import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <Link
        href="/blogs/letter-to-my-younger-self"
        className="group relative block h-full"
      >
        <Image
          src="/hero-section_image.webp"
          alt="Letter to my younger self – Aaron Donald"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Letter to my younger self
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 font-medium">
              By Aaron Donald
            </p>
            <p className="mt-6 text-white/80 group-hover:text-white transition-colors">
              Read now →
            </p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default HeroSection;
