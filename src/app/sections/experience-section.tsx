import { basePath } from "../../../next.config";

import jobs from "./experience.json";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="bg-white rounded-xl py-6 px-5 border">
      <h2 className="text-xl font-bold mb-5">Experience</h2>

      {jobs.map((job, index) => (
        <div key={job.id}>
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <Image src={`${basePath}${job.image}`} alt="logo" width={48} height={48}></Image>
            </div>
            <div>
              <p className="font-bold">{job.title}</p>
              <p className="text-sm">{job.name}</p>
              <p className="text-sm text-gray-500">
                {job.start} - {job.end}
              </p>
              <p className="text-sm mt-2">{job.description}</p>
            </div>
          </div>
          {index < jobs.length - 1 && <hr className="border-t border-gray-200 my-4" />}
        </div>
      ))}
    </section>
  );
}
