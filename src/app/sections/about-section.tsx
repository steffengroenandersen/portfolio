"use client";

import { useState } from "react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const text =
    "I am a dedicated marketer currently transitioning towards development, bringing eight years of experience as a data-driven digital marketing manager. My background encompasses a strong passion for sales, marketing, and entrepreneurship, with a focus on generating tangible impact. I am actively engaged in expanding my skills to cover the entire spectrum of web application development, from the server-side to the user interface. My goal is to contribute to creating robust and scalable solutions.";

  const previewText = text.slice(0, 295);
  return (
    <section className="bg-white rounded-xl py-6 px-5 border">
      <h2 className="text-xl font-bold">About</h2>
      <p>
        {isExpanded ? text : `${previewText}...`}
        <span className="cursor-pointer text-blue-500" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? " Show less" : " Show more"}
        </span>
      </p>
    </section>
  );
}
