"use client";

import Button from "../components/button";
import Image from "next/image";
import { basePath } from "../../../next.config";

export default function PromotedSection() {
  return (
    <section className="bg-white border rounded-xl min-h-60 p-2 flex flex-col justify-evenly items-center">
      <p className="text-center">Steffen would like to hear from you.</p>

      <div>
        <Image src={`${basePath}/profile.jpg`} alt="Profile photo" width={75} height={75} />
      </div>
      <a href="https://www.linkedin.com/in/steffen-groen-andersen/">
        <Button text="Reach out" variant="secondary" />
      </a>
    </section>
  );
}
