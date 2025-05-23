import Image from "next/image";
import { HardSkills } from "../common/constants/hard-skills";

export default function About() {
  const groupedSkills = {
    Advanced: HardSkills.filter((skill) => skill.stars === 5),
    Proficient: HardSkills.filter((skill) => skill.stars === 4),
    Intermediate: HardSkills.filter((skill) => skill.stars === 3),
    Fundamental: HardSkills.filter((skill) => skill.stars === 2),
  };

  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <div className="relative after:absolute after:w-full after:h-1 after:bg-green-600 after:-bottom-10">
        <h4 className="text-gray-600 text-2xl sm:text-3xl mb-4 sm:mb-6">
          Profile
        </h4>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-30">
          <div className="flex flex-col min-[470px]:flex-row gap-6 min-[470px]:items-center">
            <Image
              src={"https://i.postimg.cc/9MygvKTK/me.jpg"}
              alt="profile photo"
              width={140}
              height={140}
              className="w-auto h-auto border-2 border-solid border-green-600 rounded-md"
            />
            <div>
              <div className="mb-6 sm:mb-8">
                <h5 className="text-2xl sm:text-3xl mb-2">Illya Dmytrenko</h5>
                <h6 className="text-xl sm:text-2xl">
                  Junior Frontend Developer
                </h6>
              </div>
              <div className="flex gap-2 items-center">
                <Image
                  src={"location.svg"}
                  alt="location icon"
                  width={24}
                  height={24}
                />
                <p>Brovary, Ukraine</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-gray-500 text-2xl sm:text-3xl mb-3 md:mb-6">
              Languages
            </h5>
            <div className="flex flex-col md:h-[160px] justify-center gap-3 text-lg sm:text-xl">
              <p>Ukraninan - Native</p>
              <p>Russian - Native</p>
              <p>English - Upper Intermidiate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative after:absolute after:w-full after:h-1 after:bg-green-600 after:-bottom-10">
        <h4 className="text-gray-600 text-2xl sm:text-3xl mb-4 sm:mb-6">
          Technical Skills
        </h4>
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="mb-10">
            <div className="mb-4 sm:mb-6">
              <h5 className="text-lg sm:text-xl text-gray-700 mb-1">
                {category}
              </h5>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < skills[0].stars ? (
                      <Image
                        alt={"gold star"}
                        src="/gold-star.png"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        alt={"empty star"}
                        src={"/empty-star.png"}
                        width={24}
                        height={24}
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center gap-3"
                >
                  <Image
                    alt={skill.name}
                    src={`/${skill.icon}`}
                    width={60}
                    height={60}
                  />
                  <span className="text-gray-500">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="relative after:absolute after:w-full after:h-1 after:bg-green-600 after:-bottom-10">
        <h4 className="text-gray-600 text-2xl sm:text-3xl mb-4 sm:mb-6">
          Education
        </h4>
        <ul className="flex flex-col gap-2 text-xl sm:text-2xl">
          <li>Taras Shevchenko National University of Kyiv</li>
          <li>2021-2025</li>
          <li>Specialty “Computer Science”</li>
          <li>Educational program “Applied Programming”</li>
        </ul>
      </div>
      <div className="relative after:absolute after:w-full after:h-1 after:bg-green-600 after:-bottom-10">
        <h4 className="text-gray-600 text-2xl sm:text-3xl mb-4 sm:mb-6">
          Soft Skills
        </h4>
        <article>
          I consider myself a responsible, purposeful, and friendly person,
          always open to new knowledge and self-improvement. I enjoy tackling
          challenges that require analytical thinking and creativity, as well as
          working in a team where I can share my ideas and learn from others. My
          passion for frontend development drives me to continuously explore new
          technologies and enhance my skills. I am highly motivated, adaptable
          to different situations, and always eager to expand my expertise in
          web development.
        </article>
      </div>
      <div>
        <h4 className="text-gray-600 text-2xl sm:text-3xl mb-4 sm:mb-6">
          Experience
        </h4>
        <article>
          I have been studying frontend development for over 2 years, focusing
          on technologies like HTML, CSS, JavaScript, and React. I completed a
          1.5-month unpaid internship, where I gained valuable experience
          working in a team environment with Git version control. Additionally,
          I served as a team lead on a separate practical training project,
          where I coordinated the team, distributed tasks, and ensured smooth
          collaboration throughout the development process.
        </article>
      </div>
    </div>
  );
}
