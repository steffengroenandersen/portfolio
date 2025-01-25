import { basePath } from "../../../next.config";
import Image from "next/image";

export default function PostSection() {
  return (
    <section className="bg-white rounded-xl border">
      <div className="flex gap-2 pt-6 px-5">
        <div>
          <Image src={`${basePath}/profile.jpg`} alt="Profile photo" width={48} height={48} />
        </div>
        <div>
          <p className="font-semibold">Steffen Grøn Andersen</p>
          <p className="text-xs">Full Stack Developer</p>
        </div>
        <div className="ml-auto">... X</div>
      </div>
      <div className="px-5 py-2">
        <p className="text-sm">
          I created a portfolio website to showcase my projects, treating it as a project in itself. <br />
          <br />
          Inspired by LinkedIns design, I replicated its layout to explore and work with its user-friendly
          structure, which also works well for posting updates. The website was built using Next.js and
          Tailwind CSS.{" "}
          <a href="https://github.com/steffengroenandersen/portfolio" className="text-blue-500 underline">
            Check it out on Github.
          </a>
        </p>
      </div>
      <div>
        <Image src={`${basePath}/portfolio-page.png`} alt="Portfolio Page" width={1024} height={1024} />
      </div>
      <div className="flex justify-between px-5 py-2">
        <div className="flex">
          <Image
            src={`${basePath}/icons/thumbs-up.png`}
            alt="Thumbs up"
            width={20}
            height={20}
            className="object-contain"
          />
          <Image
            src={`${basePath}/icons/heart.png`}
            alt="Thumbs up"
            width={20}
            height={20}
            className="object-contain"
          />
          <Image
            src={`${basePath}/icons/clap.png`}
            alt="Thumbs up"
            width={20}
            height={20}
            className="object-contain"
          />
          <Image
            src={`${basePath}/icons/light.png`}
            alt="Thumbs up"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="ml-2">256</p>
        </div>
        <div>
          <p>
            2 Comments <span className="mx-1 font-bold">·</span> 3 reposts
          </p>
        </div>
      </div>
      <hr className="mx-5" />
      <div className="flex justify-between px-5 py-2">
        <div>
          <Image src={`${basePath}/profile.jpg`} alt="Profile photo" width={25} height={25} />
        </div>
        <div>Like</div>
        <div>Message</div>
        <div>Repost</div>
        <div>Send</div>
      </div>
    </section>
  );
}
