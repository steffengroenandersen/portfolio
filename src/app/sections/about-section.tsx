"use client";

import { useState } from "react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const text = `I am passionate about honing my skills as a full-stack developer to handle all aspects of web application development - from server-side to the user interface. My goal is to contribute to creating reliable and scalable solutions that are used by many people. I have over 10 years of experience as a digital marketing specialist, with a strong interest in sales, marketing and entrepreneurship with a strong focus on delivering tangible results. This experience enriches my daily work as a developer.`;

  const previewText = text.slice(0, 295);
  return (
    <section className="bg-white rounded-xl py-5 px-5 border">
      <h2 className="text-xl font-bold mb-3">About</h2>
      <p className="text-sm">
        {isExpanded ? text : `${previewText}...`}
        <span className="cursor-pointer text-blue-500" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? " Show less" : " Show more"}
        </span>
      </p>
    </section>
  );
}
