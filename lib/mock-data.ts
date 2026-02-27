import type {
  ChartPoint,
  JobApplication,
  JobRecommendation,
  NavItem,
  Post,
  StatCard,
  StoryProfile,
  SuggestionCard,
  UserProfile,
} from "@/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/home", icon: "home" },
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
  },
  { id: "messages", label: "Messages", href: "/home", icon: "messages" },
  { id: "jobs", label: "Jobs", href: "/dashboard", icon: "jobs" },
  { id: "bookmarks", label: "Bookmarks", href: "/home", icon: "bookmarks" },
  { id: "settings", label: "Settings", href: "/home", icon: "settings" },
];

export const userProfile: UserProfile = {
  name: "Minnie Armstrong",
  role: "UI / UX Designer",
  avatar: "/images/avatars/avatar-1.svg",
  completion: 75,
};

export const stories: StoryProfile[] = [
  {
    id: "story-1",
    name: "Rakesh Sharma",
    title: "Front-end Developer",
    avatar: "/images/avatars/avatar-2.svg",
  },
  {
    id: "story-2",
    name: "Rakesh Sharma",
    title: "Product Designer",
    avatar: "/images/avatars/avatar-3.svg",
  },
  {
    id: "story-3",
    name: "Rakesh Sharma",
    title: "UI Designer",
    avatar: "/images/avatars/avatar-4.svg",
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    author: {
      name: "Pan Feng Shui",
      role: "Product Manager",
      avatar: "/images/avatars/avatar-5.svg",
    },
    time: "12 April at 03:28 PM",
    content:
      "Had an amazing interaction with the founder of ABC Company, sharing my experience through this small article.",
    image: "/images/posts/post-1.svg",
    stats: {
      likes: 3,
      comments: 25,
      shares: 231,
      saved: 24,
    },
  },
  {
    id: "post-2",
    author: {
      name: "Clara Kim",
      role: "UX Researcher",
      avatar: "/images/avatars/avatar-6.svg",
    },
    time: "12 April at 03:28 PM",
    content:
      "A great way to generate all the motivation you need to get going. Try these daily rituals and stay consistent.",
    image: "/images/posts/post-2.svg",
    stats: {
      likes: 18,
      comments: 25,
      shares: 231,
      saved: 24,
    },
  },
];

export const suggestions: SuggestionCard[] = [
  {
    id: "suggestion-1",
    title: "Hire faster with SyncUp!",
    description: "Network without limits and hire like a pro!",
    image: "/images/cards/hire-team.svg",
  },
  {
    id: "suggestion-2",
    title: "Suggestions",
    subtitle: "Figma: Basics",
    description:
      "Below courses are suggested based on your current skills & curated to help you stay updated with the current market trends.",
    image: "/images/cards/suggestions.svg",
    rating: 4.2,
    author: "Tyler Hooks",
  },
];

export const dashboardStats: StatCard[] = [
  {
    id: "stat-1",
    label: "Active Jobs",
    value: "03",
    delta: "+5 from yesterday",
    tone: "info",
  },
  {
    id: "stat-2",
    label: "Jobs in Progress",
    value: "03",
    delta: "+6 from yesterday",
    tone: "warning",
  },
  {
    id: "stat-3",
    label: "Shortlisted",
    value: "03",
    delta: "+5 from yesterday",
    tone: "success",
  },
  {
    id: "stat-4",
    label: "On Hold",
    value: "03",
    delta: "+5 from yesterday",
    tone: "danger",
  },
];

export const vacancyStats: ChartPoint[] = [
  { month: "Jan", applied: 620, interviews: 480, rejected: 280 },
  { month: "Feb", applied: 570, interviews: 520, rejected: 240 },
  { month: "Mar", applied: 420, interviews: 610, rejected: 310 },
  { month: "Apr", applied: 520, interviews: 720, rejected: 390 },
  { month: "May", applied: 690, interviews: 510, rejected: 260 },
  { month: "Jun", applied: 630, interviews: 430, rejected: 210 },
  { month: "Jul", applied: 700, interviews: 440, rejected: 240 },
  { month: "Aug", applied: 650, interviews: 520, rejected: 300 },
  { month: "Sep", applied: 690, interviews: 560, rejected: 340 },
  { month: "Oct", applied: 640, interviews: 580, rejected: 260 },
  { month: "Nov", applied: 660, interviews: 610, rejected: 230 },
  { month: "Dec", applied: 680, interviews: 500, rejected: 210 },
];

export const jobApplications: JobApplication[] = [
  {
    id: "job-1",
    role: "Jr. Front-end Developer",
    company: "Microsoft",
    companyLogo: "/images/logos/microsoft.svg",
    appliedOn: "08/08/2023",
    status: "In-progress",
    statusTone: "warning",
  },
  {
    id: "job-2",
    role: "Senior Back-end Developer",
    company: "Google",
    companyLogo: "/images/logos/google.svg",
    appliedOn: "24/07/2023",
    status: "Applied",
    statusTone: "info",
  },
  {
    id: "job-3",
    role: "UI/UX Designer",
    company: "Meta",
    companyLogo: "/images/logos/meta.svg",
    appliedOn: "01/05/2023",
    status: "Offered",
    statusTone: "success",
  },
  {
    id: "job-4",
    role: "Product Designer",
    company: "Dribbble",
    companyLogo: "/images/logos/dribbble.svg",
    appliedOn: "11/04/2023",
    status: "Rejected",
    statusTone: "danger",
  },
];

export const recommendedJobs: JobRecommendation[] = [
  {
    id: "rec-1",
    role: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/images/logos/syncup.svg",
    meta: ["4.5 Trusted", "Bangalore", "Hybrid"],
    rating: 4.2,
    posted: "24 min. ago",
  },
  {
    id: "rec-2",
    role: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/images/logos/syncup.svg",
    meta: ["4.5 Trusted", "Bangalore", "Hybrid"],
    rating: 4.2,
    posted: "24 min. ago",
  },
  {
    id: "rec-3",
    role: "UI UX Designer",
    company: "SyncUp Technologies",
    companyLogo: "/images/logos/syncup.svg",
    meta: ["4.5 Trusted", "Bangalore", "Hybrid"],
    rating: 4.2,
    posted: "24 min. ago",
  },
];
