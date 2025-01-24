import Image from "next/image";
import education from "./education.json";

export default function EducationSection() {
  return (
    <section className="bg-white rounded-xl py-6 px-5 border">
      <h2 className="text-xl font-bold mb-5">Education</h2>

      {education.map((school, index) => (
        <div key={school.id}>
          <div className="flex gap-3">
            <div className="">
              <Image src={school.image} alt="logo" width={48} height={48}></Image>
            </div>
            <div>
              <p className="font-bold">{school.title}</p>
              <p className="text-sm">{school.name}</p>
              <p className="text-sm text-gray-500">
                {school.start} - {school.end}
              </p>
              <p className="text-sm mt-2">{school.description}</p>
            </div>
          </div>
          {index < education.length - 1 && <hr className="border-t border-gray-200 my-4" />}
        </div>
      ))}
    </section>
  );
}
