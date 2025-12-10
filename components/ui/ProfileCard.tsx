import Image from "next/image";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  jobTitle: string;
  companyName: string;
}

export default function ProfileCard({
  imageSrc,
  name,
  jobTitle,
  companyName,
}: ProfileCardProps) {
  return (
    <div className="bg-[#1F2937] rounded-lg p-8 flex items-center gap-6">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={name}
          width={120}
          height={120}
          className="rounded-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-lg">
          {jobTitle}{" "}
          <span className="text-cyan-400 font-semibold">{companyName}</span>
        </p>
      </div>
    </div>
  );
}
