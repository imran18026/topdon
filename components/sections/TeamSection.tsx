import ProfileCard from "@/components/ui/ProfileCard";

export default function TeamSection() {
  const teamMembers = [
    {
      imageSrc: "/PAUL.png",
      name: "PAUL L",
      jobTitle: "Creative Director at",
      companyName: "CompanyName",
    },
    {
      imageSrc: "/DAVID.png",
      name: "DAVID K",
      jobTitle: "Technical Lead at",
      companyName: "CompanyName",
    },
    {
      imageSrc: "/LEE.png",
      name: "LEE M",
      jobTitle: "Product Manager at",
      companyName: "CompanyName",
    },
  ];

  return (
    <section className="bg-[#1A1F28] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white italic">
            MEET OUR TEAM
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <ProfileCard
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              jobTitle={member.jobTitle}
              companyName={member.companyName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
