import React from "react";
import { Cpu, Film, Briefcase, GraduationCap } from "lucide-react";

export const About = () => {
return ( <section className="min-h-screen bg-gray-800 py-20 px-6 text-white"> <div className="max-w-5xl mx-auto">


    <h1 className="text-4xl font-bold text-center mb-14">
      About Glorious Lab
    </h1>

    <div className="space-y-10">

      {/* Software Solutions */}
      <div className="flex gap-5 items-start">
        <Cpu className="text-blue-400 mt-1" size={35} />
        <p className="text-gray-300 text-lg leading-relaxed">
          Glorious Lab is a growing technology startup focused on building
          innovative software solutions. We help businesses by developing
          custom applications, websites, and software systems that solve
          real-world problems.
        </p>
      </div>

      {/* Movie Platform */}
      <div className="flex gap-5 items-start">
        <Film className="text-purple-400 mt-1" size={35} />
        <p className="text-gray-300 text-lg leading-relaxed">
          Our team works on modern technologies to create scalable and
          efficient digital products. One of our current projects is a
          collaborative movie watching platform where users can watch
          movies together online and interact in real time.
        </p>
      </div>

      {/* Job Portal */}
      <div className="flex gap-5 items-start">
        <Briefcase className="text-green-400 mt-1" size={35} />
        <p className="text-gray-300 text-lg leading-relaxed">
          We also support job seekers through our job search portal and
          provide career guidance to help people find better opportunities
          in the tech industry.
        </p>
      </div>

      {/* Training */}
      <div className="flex gap-5 items-start">
        <GraduationCap className="text-yellow-400 mt-1" size={35} />
        <p className="text-gray-300 text-lg leading-relaxed">
          At Glorious Lab, we strongly believe in empowering students and
          professionals. Our training programs focus on practical learning
          and real-world projects so that students can become industry-ready
          developers and build successful careers.
        </p>
      </div>

    </div>

  </div>
</section>


);
};
