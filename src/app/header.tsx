import Image from "next/image";
import MaxWidthWrapper from "./components/max-width-wrapper";

export default function Header() {
  return (
    <header className="bg-white h-[53px] border-b">
      <MaxWidthWrapper>
        <div className="flex justify-between px-10 items-center h-full">
          {/* Logo and Search */}
          <div className="flex space-x-5">
            <div>
              <Image src="/logo/LinkedIn_icon.svg.webp" alt="Logo" width={38} height={38} />
            </div>
            <div className="hidden xl:flex items-center bg-blue-100 rounded-md px-2 border w-[200px]">
              <Image src="/icons/search.png" alt="Search icon" width={16} height={16} />
              <input
                type="text"
                placeholder="Search"
                className="bg-blue-100 border-none outline-none pl-2 text-sm w-full h-full"
              />
            </div>
          </div>

          {/* Tabs, Profile and Business */}
          <div className="flex space-x-10">
            <div className="flex space-x-5">
              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/home.png" alt="Home" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Home</p>
              </div>

              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/my-network.png" alt="My network" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">My Network</p>
              </div>

              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/briefcase.png" alt="My network" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Jobs</p>
              </div>

              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/message.icon.webp" alt="My network" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Messaging</p>
              </div>

              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/bell.png" alt="My network" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Notifications</p>
              </div>

              <div className="flex items-center justify-start flex-col">
                <Image src="/profile.jpg" alt="My profile" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Me</p>
              </div>
            </div>
            <div className="border-l border-gray-300 min-h-full mx-5"></div>
            <div className="flex space-x-5">
              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/business.png" alt="For Business" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">For Business</p>
              </div>
              <div className="flex items-center justify-start flex-col">
                <Image src="/icons/target.png" alt="Advertise" width={32} height={32} />
                <p className="text-xs font-light text-gray-600">Advertise</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
