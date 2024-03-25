"use client";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { DataContext } from "@/lib/context";
import { About, Project, Service, Skill, Testimonial } from "@/lib/types";
import { Loader2 } from "lucide-react";

import { useContext } from "react";

export default function Home() {
  const { user } = useContext(DataContext);

  return (
    <div className="flex flex-col w-full min-h-[80vh] items-center justify-center">
      {!user ? (
        <Loader2 className="animate-spin size-14" />
      ) : (
        <>
          <HeroSection user={user?.about as About} />
          <Services services={user?.services as Service[]} />
          {/* <Projects projects={user?.projects as Project[]} /> */}
          <Testimonials data={user?.testimonials as Testimonial[]} />
        </>
      )}
    </div>
  );
}
