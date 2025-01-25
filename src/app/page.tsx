import ExperienceSection from "./sections/experience-section";
import MaxWidthWrapper from "./components/max-width-wrapper";
import EducationSection from "./sections/education-section";
import PromotedSection from "./sections/promoted-section";
import ProfileSection from "./sections/profile-section";
import AboutSection from "./sections/about-section";
import PostSection from "./sections/post-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="bg-[#F4F2EE] grow">
          <MaxWidthWrapper>
            <div className="flex justify-center px-10 gap-5 mt-5">
              {/* Main Content */}
              <div className="w-full m:w-3/5 gap-2 flex flex-col">
                <ProfileSection />
                <AboutSection />
                <PostSection />
                <ExperienceSection />
                <EducationSection />
              </div>

              {/* Right Sidebar */}
              <div className="w-2/5 hidden lg:block">
                <PromotedSection />
              </div>
            </div>
          </MaxWidthWrapper>
        </main>
      </div>
    </>
  );
}
