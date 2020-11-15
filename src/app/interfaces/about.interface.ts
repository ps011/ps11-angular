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

interface Profile {
  name: string;
  url: string;
}

export default interface About {
  _id: string;
  name: string;
  about: string;
  imageUrl: string;
  __v: number;
  resumeUrl: string;
  skills: Skill[];
  experience: Experience[];
  profiles: Profile[];
}
