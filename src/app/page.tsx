import AboutSection from "./sections/about-section";
import MaxWidthWrapper from "./components/max-width-wrapper";
import ExperienceSection from "./sections/experience-section";
import Header from "./header";
import ProfileSection from "./sections/profile-section";
import PromotedSection from "./sections/promoted-section";
import EducationSection from "./sections/education-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="bg-[#F4F2EE] grow border-2">
          <MaxWidthWrapper>
            <div className="flex px-10 gap-5 mt-5">
              {/* Main Content */}
              <div className="w-full m:w-3/4 gap-2 flex flex-col">
                <ProfileSection />

                <AboutSection />

                <section>Featured</section>
                <section>Activity</section>
                <ExperienceSection />
                <EducationSection />

                <section>Licenses & certifications</section>
                <section>Volunteering</section>
                <section>Skills</section>
                <section>Recommendations</section>
                <section>Languages</section>
                <section>Interests</section>
              </div>

              {/* Right Sidebar */}
              <div className="w-1/4 hidden md:block">
                <PromotedSection />
              </div>
            </div>
          </MaxWidthWrapper>
        </main>
        <footer className="h-[190px] bg-gray-100">Footer</footer>
      </div>
    </>
  );
}
