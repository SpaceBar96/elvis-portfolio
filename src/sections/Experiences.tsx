import dxbLogo from "@/assets/images/dxb-logo.png";
import shinHeungLogo from "@/assets/images/shinheung.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const experiences = [
  {
    name: "DIGITAL X BRANDING SDN BHD",
    position: "Front-End Software Engineer @ 2023 - 2024",
    text: "I developed and maintained web applications using React.js and Next.js, implementing pagination to improve performance. Collaborating with backend developers, I integrated RESTful APIs to ensure smooth data flow and enhance user experience. I designed modern, user-friendly interfaces using Material-UI and CSS, improving overall engagement. I also managed version control with Git, participated in code reviews to identify and fix bugs, and optimized code for better performance. Additionally, I created reusable, modular components to maintain a scalable and maintainable codebase.",
    avatar: dxbLogo,
  },
  {
    name: "DIGITAL X BRANDING SDN BHD",
    position: "Front-End Software Engineer Trainee @ 2022 - 2023",
    text: "I assisted in developing web pages and components using HTML5, CSS3, and JavaScript, ensuring responsive designs across various devices. I worked closely with designers to translate mockups into functional web pages and collaborated with the team to enhance the UI/UX of existing applications.",
    avatar: dxbLogo,
  },
  {
    name: "SHINHEUNG SEC (MALAYSIA) SDN BHD",
    position: "QC Inspector @ 2021 - 2022",
    text: "I ensured raw materials and finished products met specifications through thorough examination and precise measurement tools. I promptly reported defects to supervisors and collaborated on corrective actions for timely resolution. By staying updated on quality regulations, I verified that products met industry standards, company policies, and regulatory requirements. Additionally, I oversaw production stages to maintain consistent quality standards and identified areas for improvement in machinery and workflows.",
    avatar: shinHeungLogo,
  },
];

export const ExperiencesSection = () => {
  return (
    <div id="my-experience" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experience"
          title="My Professional Journey"
          description="Explore my career path, skills, and contributions in various roles."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {experiences.map((exp) => (
                  <Card
                    key={exp.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={exp.avatar}
                          alt={exp.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{exp.name}</div>
                        <div className="text-sm text-white/40">
                          {exp.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base text-justify">
                      {exp.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
