export type NavItem = {
  id: string;
  label: string;
  href: string;
  icon:
    | "home"
    | "dashboard"
    | "messages"
    | "jobs"
    | "bookmarks"
    | "settings";
};

export type UserProfile = {
  name: string;
  role: string;
  avatar: string;
  completion: number;
};

export type StoryProfile = {
  id: string;
  name: string;
  title: string;
  avatar: string;
};

export type PostAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type Post = {
  id: string;
  author: PostAuthor;
  time: string;
  content: string;
  image: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
    saved: number;
  };
};

export type SuggestionCard = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  rating?: number;
  author?: string;
};

export type StatCard = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: "info" | "success" | "warning" | "danger";
};

export type ChartPoint = {
  month: string;
  applied: number;
  interviews: number;
  rejected: number;
};

export type JobApplication = {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  appliedOn: string;
  status: "In-progress" | "Applied" | "Offered" | "Rejected";
  statusTone: "info" | "warning" | "success" | "danger";
};

export type JobRecommendation = {
  id: string;
  role: string;
  company: string;
  companyLogo: string;
  meta: string[];
  rating: number;
  posted: string;
};
