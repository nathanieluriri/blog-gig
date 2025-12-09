"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);
  const cohortContainerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      src: "/landing_page/eberechi.jpg",
      fallback: "https://placehold.co/1920x1080/111/fff?text=Eze",
      alt: "Eberechi Eze",
    },
    {
      src: "/landing_page/Kobbie.webp",
      fallback: "https://placehold.co/1920x1080/111/fff?text=Mainoo",
      alt: "Kobbie Mainoo",
    },
    {
      src: "/landing_page/Marcus.jpeg",
      fallback: "https://placehold.co/1920x1080/111/fff?text=Rashford",
      alt: "Marcus Rashford",
    },
    {
      src: "/landing_page/mason.jpg",
      fallback: "https://placehold.co/1920x1080/111/fff?text=Greenwood",
      alt: "Mason Greenwood",
    },
    {
      src: "/landing_page/Osimhen.webp",
      fallback: "https://placehold.co/1920x1080/111/fff?text=Osimhen",
      alt: "Victor Osimhen",
    },
  ];

  const players = [
    {
      name: "Eberechi Eze",
      club: "Crystal Palace",
      tag: "01 The Creative",
      img: "/landing_page/eberechi.jpg",
      fallback: "https://placehold.co/400x500/e5e5e5/000000?text=Eze",
    },
    {
      name: "Marcus Rashford",
      club: "Manchester United",
      tag: "02 The Icon",
      img: "/landing_page/Marcus.jpeg",
      fallback: "https://placehold.co/400x500/e5e5e5/000000?text=Rashford",
    },
    {
      name: "Mason Greenwood",
      club: "Marseille",
      tag: "03 The Complex",
      img: "/landing_page/mason.jpg",
      fallback: "https://placehold.co/400x500/e5e5e5/000000?text=Greenwood",
    },
    {
      name: "Kobbie Mainoo",
      club: "Manchester United",
      tag: "04 The Breakout",
      img: "/landing_page/Kobbie.webp",
      fallback: "https://placehold.co/400x500/e5e5e5/000000?text=Mainoo",
    },
    {
      name: "Victor Osimhen",
      club: "Galatasaray",
      tag: "05 The Star",
      img: "/landing_page/Osimhen.webp",
      fallback: "https://placehold.co/400x500/e5e5e5/000000?text=Osimhen",
    },
  ];

  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          currentIndex * 100
        }%)`;
      }
    };
    updateCarousel();
  }, [currentIndex]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startAutoPlay = () => {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    };
    startAutoPlay();

    const hero = document.querySelector("header");
    const handleMouseEnter = () => clearInterval(interval);
    const handleMouseLeave = () => startAutoPlay();

    hero?.addEventListener("mouseenter", handleMouseEnter);
    hero?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      hero?.removeEventListener("mouseenter", handleMouseEnter);
      hero?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = navRef.current;
      const content = contentRef.current;

      if (window.scrollY > 200) {
        nav?.classList.add("scrolled");
        nav?.classList.remove("justify-between", "px-8");
        nav?.classList.add("justify-center");
      } else {
        nav?.classList.remove("scrolled", "justify-center");
        nav?.classList.add("justify-between", "px-8");
      }

      if (window.scrollY < 800 && content) {
        const curveFactor = Math.max(0, 80 - window.scrollY / 15);
        content.style.borderTopLeftRadius = `${curveFactor}px`;
        content.style.borderTopRightRadius = `${curveFactor}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollCohort = (direction: "left" | "right") => {
    const container = cohortContainerRef.current;
    if (!container) return;
    const scrollAmount = 450;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap");

        html,
        body {
          overflow-x: hidden;
          overflow-y: visible;
        }

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .metallic-hero {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          z-index: 0;
          background: linear-gradient(45deg, #000, #1c1c1c, #0a0a0a, #2a2a2a);
          background-size: 300% 300%;
          animation: metalPulse 15s infinite alternate;
        }

        @keyframes metalPulse {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          background: #050505;
          transition: border-radius 0.3s ease;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.1;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 20;
        }

        nav {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          left: 0;
        }
        nav.scrolled {
          width: fit-content;
          left: 50%;
          transform: translateX(-50%);
          top: 20px;
          padding: 0 24px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 50px;
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 {
          transition-delay: 100ms;
        }
        .stagger-2 {
          transition-delay: 200ms;
        }

        .player-card {
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .player-card:hover {
          transform: translateY(-10px) scale(1.02);
        }
        .player-card:hover .card-img {
          transform: scale(1.1);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="scroll-smooth bg-black overflow-x-hidden antialiased">
        <nav
          ref={navRef}
          id="navbar"
          className="fixed top-0 z-50 h-20 border-b border-white/5 bg-black/0 flex items-center justify-between px-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
              The Players Rising
            </span>
          </div>
          <a
            href="https://www.theplayersrising.com/"
            className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 bg-white text-black rounded-full hover:bg-zinc-200 transition-all"
          >
            Read Articles
          </a>
        </nav>

        <header className="metallic-hero flex items-center justify-center relative group">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div
              ref={carouselRef}
              id="carousel-track"
              className="flex h-full w-full transition-transform duration-1000 ease-out will-change-transform"
            >
              {slides.map((slide) => (
                <img
                  key={slide.alt}
                  src={slide.src}
                  onError={(e) => (e.currentTarget.src = slide.fallback)}
                  alt={slide.alt}
                  className="w-full h-full object-cover shrink-0 opacity-40 mix-blend-luminosity"
                />
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setCurrentIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-md"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentIndex((i) => (i + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all backdrop-blur-md"
          >
            ›
          </button>

          <div className="noise-overlay"></div>

          <div className="relative z-40 text-center px-6 max-w-5xl pointer-events-none">
            <div className="mb-6 inline-flex border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm pointer-events-auto">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-300">
                From Academy to First Team
              </span>
            </div>
            <h1 className="text-6xl md:text-[7.5rem] font-extrabold uppercase tracking-tighter leading-[0.9] mix-blend-lighten opacity-95">
              Media, Narrative <br />
              <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600">
                & The Star
              </span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
              How media systems and narratives shape public perceptions, career
              opportunities, and athlete branding during the youth-to-pro
              transition.
            </p>
          </div>
        </header>

        <main
          ref={contentRef}
          id="content"
          className="content-wrapper rounded-t-[5rem] border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.8)] pt-20"
        >
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 reveal">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
                Project Aims
              </h2>
              <div className="text-right">
                <p className="text-white text-xl md:text-3xl font-bold max-w-lg">
                  Mapping the transition from "Academy Prospect" to "First Team
                  Star."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {["Timelines", "Framing", "Impact"].map((title, i) => (
                <div
                  key={title}
                  className="group border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/5 transition-colors cursor-default px-4 rounded-2xl reveal"
                >
                  <div className="mb-4 md:mb-0">
                    <span className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-2">
                      Aim 0{i + 1}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                      {title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm max-w-xs text-right">
                    {i === 0 &&
                      "Constructing verified career timelines and media-attention counts for five key players."}
                    {i === 1 &&
                      'Analyzing dominant narratives (e.g., "prodigy," "controversy") across press, broadcast, and social.'}
                    {i === 2 &&
                      "Identifying how sensational headlines or club narratives facilitate or hinder trajectories."}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-24 bg-[#0a0a0a] border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                  The Case Studies
                </h2>
                <p className="text-zinc-500 mt-4 text-sm font-mono tracking-wide">
                  FIVE PLAYERS. FIVE NARRATIVES.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollCohort("left")}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollCohort("right")}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  →
                </button>
              </div>
            </div>

            <div
              ref={cohortContainerRef}
              id="cohort-container"
              className="flex overflow-x-auto gap-6 px-6 max-w-7xl mx-auto pb-12 no-scrollbar snap-x scroll-smooth"
            >
              {players.map((player, i) => (
                <div
                  key={player.name}
                  className={`min-w-[350px] md:min-w-[400px] snap-start reveal ${
                    i === 1 ? "stagger-1" : i === 2 ? "stagger-2" : ""
                  }`}
                >
                  <div className="player-card h-[500px bg-black rounded-4xl overflow-hidden flex flex-col relative group border border-white/10">
                    <div className="p-8 pb-0 z-10">
                      <span className="inline-block px-3 py-1 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                        {player.tag}
                      </span>
                      <h3 className="text-4xl font-extrabold text-white uppercase leading-none tracking-tight">
                        {player.name.split(" ")[0]}
                        <br />
                        {player.name.split(" ").slice(1).join(" ")}
                      </h3>
                      <p className="text-zinc-500 text-xs font-bold mt-2 uppercase tracking-wider">
                        {player.club}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-3/4 overflow-hidden">
                      <Image
                        src={player.img}
                        onError={(e) => (e.currentTarget.src = player.fallback)}
                        alt={player.name}
                        fill
                        className="card-img w-full h-full object-cover object-top transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-white/20">
                      ↗
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="max-w-7xl mx-auto px-6 py-20 border-t border-white/10 flex flex-col md:flex-row gap-12 text-zinc-500 text-sm reveal">
            <div className="flex-1">
              <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-[10px]">
                Methodology: Quantitative
              </h4>
              <p>
                Compiling debut and milestone dates from Transfermarkt.
                Measuring media attention using counts of articles and
                social-post volumes in selected windows.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-[10px]">
                Methodology: Qualitative
              </h4>
              <p>
                Thematic discourse analysis of feature articles and match
                commentary to identify framing narratives like "prodigy" or
                "comeback."
              </p>
            </div>
            <div className="flex-1 text-right">
              <p className="mb-2">© 2025 The Players Rising.</p>
              <p>Supervisor: Media Studies Dept.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
