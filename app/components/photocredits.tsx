const CREDITS = [
  {
    subject: "Marcus Rashford",
    author: "Bryan Berlin / WikiPortraits",
    file: "https://commons.wikimedia.org/wiki/File:Marcus_Rashford_England_v_Ghana_23_June_2026-072.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    subject: "Kobbie Mainoo",
    author: "Bryan Berlin / WikiPortraits",
    file: "https://commons.wikimedia.org/wiki/File:Kobbie_Mainoo_England_v_Ghana_23_June_2026-042.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    subject: "Old Trafford",
    author: "Arne Müseler",
    file: "https://commons.wikimedia.org/wiki/File:Manchester_United_Old_Trafford.jpg",
    license: "CC BY-SA 3.0 DE",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en",
  },
  {
    subject: "Stade Vélodrome",
    author: "Zakarie Faibis",
    file: "https://commons.wikimedia.org/wiki/File:Stade_V%C3%A9lodrome_Marseille_France.jpg",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    subject: "Stadio San Paolo",
    author: "C.R.",
    file: "https://commons.wikimedia.org/wiki/File:San_Paolo_-_Curva_A.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
];

const PhotoCredits = ({ className = "" }: { className?: string }) => (
  <p className={`text-[11px] leading-relaxed ${className}`}>
    Photos via Wikimedia Commons:{" "}
    {CREDITS.map((c, i) => (
      <span key={c.subject}>
        {c.subject} by{" "}
        <a href={c.file} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
          {c.author}
        </a>{" "}
        (
        <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
          {c.license}
        </a>
        ){i < CREDITS.length - 1 ? "; " : "."}
      </span>
    ))}
  </p>
);

export default PhotoCredits;
