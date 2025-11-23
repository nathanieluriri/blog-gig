import { formatDate } from "@/app/util/date";
import Image from "next/image";

interface IAuthorCardProps {
  name: string;
  avatarUrl: string;
  affiliation: string;
  date: number;
}

const AuthorCard: React.FC<IAuthorCardProps> = ({
  name,
  avatarUrl,
  affiliation,
  date,
}) => {
  return (
    <div className="flex flex-col items-center justify-start">
      <div className="h-24 w-24 relative flex justify-center items-center overflow-hidden">
        <Image
          src={avatarUrl}
          alt="model"
          fill
          className="object-cover h-24 w-24 rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <p className="text-center truncate">{name}</p>
        <p className="border-b border-b-gray-300 pb-1 text-center">
          {affiliation}
        </p>
        <p className="text-center">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
