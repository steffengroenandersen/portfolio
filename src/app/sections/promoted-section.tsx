"use client";

import Button from "../components/button";
import Image from "next/image";

export default function PromotedSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:steffengroenandersen@gmail.com";
  };

  return (
    <section className="bg-white border rounded-xl min-h-60 p-2 flex flex-col justify-evenly items-center">
      <p className="text-center">Steffen would like to hear from you.</p>

      <div>
        <Image src="/profile.jpg" alt="Profile photo" width={75} height={75} />
      </div>
      <Button text="Reach out" variant="secondary" onClick={handleEmailClick} />
    </section>
  );
}
