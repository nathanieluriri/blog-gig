import { formatDate } from "@/app/util/date";
import Image from "next/image";

interface IAuthorCardProps {
  name: string;
  avatarUrl?: string | null;
  affiliation: string;
  date: number;
}

const AuthorCard: React.FC<IAuthorCardProps> = ({ name, avatarUrl, affiliation, date }) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-center justify-start gap-3">
      <div className="h-16 w-16 md:h-24 md:w-24 relative flex justify-center items-center overflow-hidden rounded-full bg-gray-900 text-white text-xl md:text-2xl font-semibold">
        {avatarUrl ? <Image src={avatarUrl} alt={name} fill className="object-cover" /> : initials}
      </div>
      <div className="flex flex-col gap-1 justify-center items-center text-gray-900">
        <p className="text-center text-base md:text-lg">{name}</p>
        <p className="border-b border-b-gray-300 pb-1 text-center text-sm md:text-base text-gray-500">
          {affiliation}
        </p>
        <p className="text-center text-sm md:text-base text-gray-500">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
