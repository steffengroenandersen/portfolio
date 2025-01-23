import Image from "next/image";

export default function ExperienceSection() {
  const jobs = [
    {
      id: 1,
      image: "/confectio_logo.jfif",
      title: "Junior Frontend Developer and Marketing Specialist",
      name: "Confect ApS",
      start: "Mar 2024",
      end: "Present",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Developer Tasks",
    },
    {
      id: 2,
      image: "/estaid_logo.jfif",
      title: "Junior Developer",
      name: "Estaid",
      start: "Sep 2022",
      end: "Feb 2024",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Developer Tasks",
    },
  ];

  return (
    <section className="bg-white rounded-xl p-4 border">
      <h2 className="text-xl font-bold">Experience</h2>

      {jobs.map((job) => (
        <div key={job.id} className="flex gap-2 mb-5">
          <div className="">
            <Image src={job.image} alt="logo" width={48} height={48}></Image>
          </div>
          <div className="">
            <p>{job.title}</p>
            <p>{job.name}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
