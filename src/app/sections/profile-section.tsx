import Button from "../components/button";
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="rounded-xl bg-white border overflow-hidden">
      {/* Cover photo */}
      <div>
        <Image src="/cover-photo.png" alt="Cover photo" layout="responsive" width={1400} height={350}></Image>
      </div>

      {/* Details */}
      <div className="py-6 px-5">
        <div className="mt-[-112px]">
          <div className="z-10  bg-white rounded-full overflow-hidden w-[150px] h-[150px]">
            <Image src="/profile.jpg" alt="Profile photo" width={150} height={150}></Image>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">Steffen Grøn Andersen</h1>
            <p>Full Stack Developer</p>
          </div>
          <div>
            <p className="text-sm text-[#666666] font-medium">
              Copenhagen, Capital Region of Denmark, Denmark
              <span className="ml-1 text-blue-500 font-bold">Contact info</span>
            </p>
          </div>
          <div>
            <p className="text-sm text-[#666666] font-medium">500+ connections</p>

            <div className="mt-2 flex gap-2">
              <a href="https://www.linkedin.com/in/steffen-groen-andersen/">
                <Button text="Connect" variant="primary" />
              </a>
              <a href="https://www.linkedin.com/in/steffen-groen-andersen/">
                <Button text="Message" variant="secondary" />
              </a>
              <a href="https://www.linkedin.com/in/steffen-groen-andersen/">
                <Button text="More" variant="tertiary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
