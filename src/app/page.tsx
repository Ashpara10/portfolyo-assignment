"use client";
import Contact from "@/components/contact";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { DataContext } from "@/lib/context";
import {
  About,
  Project,
  Service,
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
          {/* <Timeline data={user?.timeline as Ttimeline[]} /> */}
          <Services services={user?.services as Service[]} />
          <Projects projects={user?.projects as Project[]} />
          <Testimonials data={user?.testimonials as Testimonial[]} />
          <Contact />
        </>
      )}
    </div>
  );
}
