import React from "react";
import {
Code,
Headphones,
Film,
Briefcase,
GraduationCap,
Rocket,
Megaphone,
PenTool
} from "lucide-react";

export const Service = () => {
const services = [
{
title: "Custom App & Web Development",
desc: "We build custom web applications, mobile apps, and software solutions for startups and businesses.",
icon: <Code size={40} />,
},
{
title: "Tech Support",
desc: "We provide technical support and development services for companies that need reliable software solutions.",
icon: <Headphones size={40} />,
},
{
title: "Startup Projects",
desc: "Our current project is a collaborative movie watching platform where users can watch movies together online.",
icon: <Film size={40} />,
},
{
title: "Job Search Portal",
desc: "We help people find better job opportunities through our job search platform.",
icon: <Briefcase size={40} />,
},
{
title: "Career Training",
desc: "We train students and professionals with modern tech skills for better career growth.",
icon: <GraduationCap size={40} />,
},
{
title: "Industry Ready Training",
desc: "Our training programs prepare students with real-world projects and industry-level experience.",
icon: <Rocket size={40} />,
},
{
title: "Marketing Services",
desc: "We provide marketing services to help businesses grow their online presence.",
icon: <Megaphone size={40} />,
},
{
title: "Content Creation",
desc: "We create high-quality content for websites, blogs, and social media.",
icon: <PenTool size={40} />,
},
];

return ( <section id="service" className="min-h-screen bg-gray-900 py-20 px-10 text-white"> <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {services.map((service, index) => (
      <div
        key={index}
        className="bg-gray-800 p-8 rounded-xl hover:scale-105 transition text-center"
      >
        <div className="flex justify-center mb-4 text-blue-400">
          {service.icon}
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {service.title}
        </h3>

        <p className="text-gray-300">
          {service.desc}
        </p>
      </div>
    ))}
  </div>
</section>


);
};
