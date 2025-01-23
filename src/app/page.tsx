import AboutSection from "./about-section";
import Header from "./header";
import ProfileSection from "./profile-section";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <main className="bg-[#F4F2EE] grow border-2 ">
          <div className="flex px-10 gap-5">
            {/* Main Content */}
            <div className="w-3/4 gap-2 flex flex-col">
              <ProfileSection />
              <AboutSection />

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
