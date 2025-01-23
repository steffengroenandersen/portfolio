import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <header className="bg-white h-[53px]">
          <div className="flex justify-between px-10 items-center h-full">
            {/* Logo and Search */}
            <div className="flex space-x-5">
              <div>Logo</div>
              <div>Search</div>
            </div>

            {/* Tabs, Profile and Business */}
            <div className="flex space-x-10">
              <div className="flex space-x-5">
                <div>Home</div>
                <div>My Network</div>
                <div>Jobs</div>
                <div>Messaging</div>
                <div>Notifications</div>
                <div>Me</div>
              </div>

              <div className="flex space-x-5">
                <div>For Business</div>
                <div>Advertise</div>
              </div>
            </div>
          </div>
        </header>
        <main className="bg-[#F4F2EE] grow border-2 ">
          <div className="flex px-10 gap-5">
            {/* Main Content */}
            <div className="w-3/4">
              {/* Profile Section */}
              <section className=" rounded-xl bg-white">
                {/* Cover photo */}
                <div>
                  <Image
                    src="/cover-photo.jfif"
                    alt="Cover photo"
                    layout="responsive"
                    width={1400}
                    height={350}
                  ></Image>
                </div>

                {/* Details */}
                <div className="p-4">
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
                    </div>
                  </div>
                </div>
              </section>

              {/* About */}
              <section>About</section>

              {/* Featured */}
              <section>Featured</section>

              {/* Activity */}
              <section>Activity</section>

              {/* Experience */}
              <section>Experience</section>

              {/* Education */}
              <section>Education</section>

              {/* Licenses & certifications */}
              <section>Licenses & certifications</section>

              {/* Volunteering */}
              <section>Volunteering</section>

              {/* Skills */}
              <section>Skills</section>

              {/* Recommendations */}
              <section>Recommendations</section>

              {/* Languages */}
              <section>Languages</section>

              {/* Interests */}
              <section>Interests</section>
            </div>

            {/* Right Sidebar */}
            <div className="w-1/4 border ">
              {/* Promoted */}
              <section>Promoted</section>

              {/* More profiles like you */}
              <section>More profiles like you</section>

              {/* Exlore Premium profiles */}
              <section>Explore Premium profiles</section>

              {/* People you may know */}
              <section>People you may know</section>

              {/* You might like */}
              <section>You might like</section>

              {/* Promoted */}
              <section>Promoted</section>
            </div>
          </div>
        </main>
        <footer className="h-[190px] bg-gray-100">Footer</footer>
      </div>
    </>
  );
}
