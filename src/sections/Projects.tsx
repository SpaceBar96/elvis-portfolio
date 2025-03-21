import agClaimDashboardPage from "@/assets/images/ag-claims.png";
import leadapreneurAdminPage from "@/assets/images/admin-lead.png";
import leadapreneurUserPage from "@/assets/images/cosmos-lead.png";
import prizeHuntLandingPage from "@/assets/images/prizehunt.png";
import jiaruDashboardPage from "@/assets/images/jiaru.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Digital X Branding",
    year: "2024",
    title: "Jiaru Used Oil Collection Management System",
    results: [
      { title: "Frontend + Design" },
      { title: "Next.JS" },
      { title: "TypeScript" },
      { title: "SCSS" },
    ],
    link: "https://admin.jiaru.asia/auth/jwt/login/",
    image: jiaruDashboardPage,
  },
  {
    company: "Digital X Branding",
    year: "2023",
    title: "PrizeHunt Site",
    results: [
      { title: "Frontend" },
      { title: "React" },
      { title: "TypeScript" },
      { title: "Strapi" },
      { title: "Storybook" },
      { title: "SCSS" },
    ],
    link: "https://prizehunt.asia/",
    image: prizeHuntLandingPage,
  },
  {
    company: "Digital X Branding",
    year: "2023",
    title: "Leadapreneur Admin Panel",
    results: [
      { title: "Frontend" },
      { title: "React" },
      { title: "TypeScript" },
      { title: "SCSS" },
    ],
    link: "https://admin.leadapreneur.com/login/",
    image: leadapreneurAdminPage,
  },
  {
    company: "Digital X Branding",
    year: "2023",
    title: "Leadapreneur Site",
    results: [
      { title: "Frontend" },
      { title: "React" },
      { title: "TypeScript" },
      { title: "SCSS" },
      { title: "Components" },
    ],
    link: "https://cosmos.leadapreneur.com/login/",
    image: leadapreneurUserPage,
  },
  {
    company: "Digital X Branding",
    year: "2022",
    title: "AG Claims Admin Panel",
    results: [
      { title: "Frontend" },
      { title: "React" },
      { title: "SCSS" },
      { title: "Material-UI" },
    ],
    link: "https://portal.agclaims.com.my/login/",
    image: agClaimDashboardPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="my-projects" className="py-20 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px )`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
