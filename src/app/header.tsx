import Image from "next/image";
import MaxWidthWrapper from "./components/max-width-wrapper";

interface MenuItem {
  link: string;
  alt: string;
  label: string;
}

export default function Header() {
  const size = 21;

  const menu: MenuItem[] = [
    { link: "/icons/home.png", alt: "Home", label: "Home" },
    { link: "/icons/my-network.png", alt: "My network", label: "My Network" },
    { link: "/icons/briefcase.png", alt: "Jobs", label: "Jobs" },
    { link: "/icons/message.png", alt: "Messaging", label: "Messaging" },
    { link: "/icons/bell.png", alt: "Notifications", label: "Notifications" },
    { link: "/profile.jpg", alt: "My profile", label: "Me" },
    { link: "/icons/business.png", alt: "For Business", label: "For Business" },
    { link: "/icons/target.png", alt: "Advertise", label: "Advertise" },
  ];

  return (
    <header className="bg-white h-[53px] border-b">
      <MaxWidthWrapper>
        <div className="flex justify-between px-10 items-center h-full">
          {/* Logo and Search */}
          <div className="flex space-x-5">
            <div>
              <Image src="/logo/LinkedIn_icon.svg.webp" alt="Logo" width={38} height={38} />
            </div>
            <div className="hidden lg:flex items-center bg-blue-100 rounded-md px-2 border w-[135]">
              <Image src="/icons/search.png" alt="Search icon" width={16} height={16} />
              <input
                type="text"
                placeholder="Search"
                className="bg-blue-100 border-none outline-none pl-2 text-sm w-full"
              />
            </div>
          </div>

          {/* Tabs, Profile and Business */}
          <div className="flex space-x-10">
            <div className="flex space-x-5">
              {menu.slice(0, 6).map((item, index) => (
                <div key={index} className="flex items-center justify-start flex-col">
                  <Image src={item.link} alt={item.alt} width={size} height={size} />
                  <p className="text-xs font-light text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex border-l border-gray-300 min-h-full mx-5"></div>
            <div className="hidden lg:flex space-x-5">
              {menu.slice(6).map((item, index) => (
                <div key={index} className="flex items-center justify-start flex-col">
                  <Image src={item.link} alt={item.alt} width={size} height={size} />
                  <p className="text-xs font-light text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
