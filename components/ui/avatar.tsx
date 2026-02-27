import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  src: string;
  alt: string;
  size?: AvatarSize;
  className?: string;
  ring?: boolean;
};

const sizeClasses: Record<AvatarSize, string> = {
  xs: "h-7 w-7",
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

export function Avatar({ src, alt, size = "md", className, ring }: AvatarProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-surface-muted",
        ring && "ring-2 ring-accent/30 ring-offset-2 ring-offset-surface",
        sizeClasses[size],
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="96px" />
    </div>
  );
}
