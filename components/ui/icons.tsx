import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  filled?: boolean;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function HomeIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M6.5 9.5V20h11V9.5" />
    </svg>
  );
}

export function DashboardIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
    </svg>
  );
}

export function MessageIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M4.5 5.5h15v9.5a2 2 0 0 1-2 2H8.5l-4 3v-3.5" />
    </svg>
  );
}

export function BriefcaseIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M8 6.5h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z" />
      <path d="M9.5 6.5V5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v1.5" />
    </svg>
  );
}

export function BookmarkIcon({ size = 20, filled = false, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      {...baseProps} 
      {...props}
      fill={filled ? "currentColor" : "none"}
    >
      <path d="M6.5 4.5h11v15l-5.5-3-5.5 3z" />
    </svg>
  );
}

export function SettingsIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.4-2-3.4-2.3.8a7 7 0 0 0-1.7-1l-.3-2.4H9.4L9.1 6a7 7 0 0 0-1.7 1l-2.3-.8-2 3.4 2 1.4A7 7 0 0 0 5 12c0 .3 0 .7.1 1l-2 1.4 2 3.4 2.3-.8a7 7 0 0 0 1.7 1l.3 2.4h4.2l.3-2.4a7 7 0 0 0 1.7-1l2.3.8 2-3.4-2-1.4c.1-.3.1-.7.1-1Z" />
    </svg>
  );
}

export function SearchIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

export function BellIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M6.5 16.5h11l-1.2-2v-4.5a4.3 4.3 0 1 0-8.6 0v4.5z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

export function MoreIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </svg>
  );
}

export function HeartIcon({ size = 18, filled = false, ...props }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      {...baseProps} 
      {...props}
      fill={filled ? "currentColor" : "none"}
    >
      <path d="M20 8.7c0-2.3-1.8-4.2-4.1-4.2-1.7 0-3.1 1-3.8 2.4C11.4 5.5 10 4.5 8.3 4.5 6 4.5 4.2 6.4 4.2 8.7c0 5 7.9 9.3 7.9 9.3S20 13.7 20 8.7z" />
    </svg>
  );
}

export function CommentIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M5 6.5h14v8a2 2 0 0 1-2 2H9l-4 3v-3.5" />
    </svg>
  );
}

export function ShareIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M16 7.5l-8 4.5 8 4.5" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}

export function PlusIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function PaperclipIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M8 12.5l6-6a3 3 0 0 1 4.2 4.2l-7.4 7.4a4.5 4.5 0 0 1-6.4-6.4l7.2-7.2" />
    </svg>
  );
}

export function SendIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M4 12l16-8-5 8 5 8-16-8z" />
    </svg>
  );
}

export function ChartIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M4.5 18.5V5.5" />
      <path d="M8.5 18.5V9.5" />
      <path d="M12.5 18.5V7.5" />
      <path d="M16.5 18.5V11.5" />
      <path d="M20.5 18.5V6.5" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function StarIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps} {...props}>
      <path d="M12 3.5l2.7 5.4 6 .9-4.4 4.3 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.3 6-.9z" />
    </svg>
  );
}
