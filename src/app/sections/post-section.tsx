import Image from "next/image";

export default function PostSection() {
  return (
    <section className="bg-white rounded-xl  border">
      {/* header */}
      <div className="flex gap-2 pt-6 px-5">
        <div>
          <Image src="/profile.jpg" alt="Profile photo" width={48} height={48} />
        </div>
        <div>
          <p className="font-semibold">Steffen Grøn Andersen</p>
          <p className="text-xs">Full Stack Developer</p>
        </div>
        <div className="ml-auto">... X</div>
      </div>
      <div className="px-5 py-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div>
        <Image src="/portfolio-page.png" alt="Portfolio Page" width={1024} height={1024} />
      </div>

      <div>Reactions and comments</div>
      <div>Like bar</div>
    </section>
  );
}
