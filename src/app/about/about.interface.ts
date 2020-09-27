interface Skill {
  name: string;
  logo: string;
  rating: string;
}

interface Experience {
  company: string;
  logo: string;
  from: string;
  to: string;
  technologies: string[];
  designation: string;
  location: string;
}

export interface Profile {
  name: string;
  url: string;
}

export interface About {
  name: string;
  about: string;
  imageUrl: string;
  resumeUrl: string;
  skills: Skill[];
  experience: Experience[];
  profiles: Profile[];
}


