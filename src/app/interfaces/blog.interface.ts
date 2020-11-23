export interface Date {
  $date: Date;
}

export interface Blog {
  _id: string;
  title: string;
  shortDescription: string;
  banner: string;
  thumbnail: string;
  author: string;
  profileLink: string;
  tags: string;
  content: string;
  hidden: boolean;
  date: Date;
}

