import Image from "next/image";

export default function ExperienceSection() {
  const jobs = [
    {
      id: 1,
      image: "/logo/confectio_logo.jfif",
      title: "Junior Frontend Developer and Marketing Specialist",
      name: "Confect ApS",
      start: "Mar 2024",
      end: "Present",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Development on Confect.io in Next.js and supporting marketing.",
    },
    {
      id: 2,
      image: "/logo/estaid_logo.jfif",
      title: "Junior Developer",
      name: "Estaid",
      start: "Sep 2022",
      end: "Feb 2024",
      place: "Copenhagen, Capital Region, Denmark",
      description:
        "Development of basic functionality to our service in Vue.js and supporting sales and marketing.",
    },
    {
      id: 3,
      image: "/logo/kontainer_logo.jfif",
      title: "Head of Growth and Marketing",
      name: "Kontainer - Digital Asset Management since 2001",
      start: "Feb 2022",
      end: "Aug 2022",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Responsible for CRM implementation and marketing activities.",
    },
    {
      id: 4,
      image: "/logo/beyond11_logo.jfif",
      title: "Paid Social Specialist",
      name: "SPASIBA",
      start: "Oct 2021",
      end: "Jan 2022",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Responsible for developing and executing campaigns with our clients.",
    },
    {
      id: 5,
      image: "/logo/lead_supply_aps_logo.jfif",
      title: "Head of Paid Traffic",
      name: "Karman Connect A/S",
      start: "Dec 2022",
      end: "Sep 2021",
      place: "Copenhagen, Capital Region, Denmark",
      description: "Responsible for and executing on all marketing channels.",
    },
    {
      id: 6,
      image: "/logo/web2media_aps_logo.jfif",
      title: "Digital Marketing Specialist",
      name: "Web2Media ApS",
      start: "Jan 2014",
      end: "Nov 2022",
      place: "Copenhagen, Capital Region, Denmark",
      description:
        "Strategy and project management, campaign and budget planning, training and mentoring colleagues.",
    },
  ];

  return (
    <section className="bg-white rounded-xl p-4 border">
      <h2 className="text-xl font-bold mb-5">Experience</h2>

      {jobs.map((job) => (
        <div key={job.id}>
          <div className="flex gap-3">
            <div className="">
              <Image src={job.image} alt="logo" width={48} height={48}></Image>
            </div>
            <div>
              <p className="font-bold">{job.title}</p>
              <p>{job.name}</p>
              <p className="text-sm text-gray-500">
                {job.start} - {job.end}
              </p>
              <p className="text-sm mt-2">{job.description}</p>
            </div>
          </div>
          <hr className="border-t border-gray-200 my-4" />
        </div>
      ))}
    </section>
  );
}
