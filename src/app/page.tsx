"use client";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import Testimonials from "@/components/testimonials";
import { DataContext } from "@/lib/context";
import {
  About,
  Project,
  Service,
  Skill,
  SocialHandle,
  Testimonial,
  Timeline as Ttimeline,
} from "@/lib/types";
import { Loader2 } from "lucide-react";

import { useContext } from "react";

export default function Home() {
  const { user } = useContext(DataContext);
  console.log({ data: user?.timeline });
  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center">
      {!user ? (
        <Loader2 className="animate-spin size-14" />
      ) : (
        <>
          <HeroSection user={user?.about as About} />
          <Services services={user?.services as Service[]} />
          <Projects projects={user?.projects as Project[]} />
          <Skills skills={user?.skills as Skill[]} />
          <Testimonials data={user?.testimonials as Testimonial[]} />
          <Contact
            data={user?.social_handles as SocialHandle[]}
            phone={user?.about?.phoneNumber}
            email={user?.email}
          />
        </>
      )}
    </div>
  );
}
