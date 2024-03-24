interface Avatar {
  public_id: string;
  url: string;
  _id: string;
}

interface SocialHandle {
  platform: string;
  url: string;
  image: Avatar;
  enabled: boolean;
  _id: string;
}

export interface Testimonial {
  image: Avatar;
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string;
}

export interface Service {
  name: string;
  charge: string;
  desc: string;
  image: Avatar;
  enabled: boolean;
  _id: string;
}

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Avatar;
  _id: string;
}

export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: Avatar;
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}

interface YouTube {
  url: string;
  title: string;
  sequence: number;
  image: Avatar | null;
  embedId: string;
  enabled: boolean;
  _id: string;
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  avatar: Avatar;
  alternateAvatars: Avatar[];
}

export interface PortfolioData {
  about: About;
  _id: string;
  username: string;
  email: string;
  role: string;
  timeline: Timeline[];
  skills: Skill[];
  youtube: YouTube[];
  projects: Project[];
  social_handles: SocialHandle[];
  services: Service[];
  testimonials: Testimonial[];
}
