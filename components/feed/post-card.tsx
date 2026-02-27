"use client";

import { useState } from "react";
import Image from "next/image";
import type { Post } from "@/types";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MoreIcon,
  ShareIcon,
} from "@/components/ui/icons";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likes, setLikes] = useState(post.stats.likes);
  const [saved, setSaved] = useState(post.stats.saved);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    setSaved(isSaved ? saved - 1 : saved + 1);
  };

  const handleShare = () => {
    // Copy link to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const handleCommentSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && comment.trim()) {
      // Add comment logic here
      console.log("Comment submitted:", comment);
      setComment("");
    }
  };

  return (
    <Card className="animate-fade-up overflow-hidden transition-shadow hover:shadow-md">
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Avatar src={post.author.avatar} alt={post.author.name} size="md" />
            <div>
              <p className="text-sm font-semibold text-ink">
                {post.author.name}
              </p>
              <p className="text-xs text-ink-soft">{post.time}</p>
            </div>
          </div>
          <IconButton icon={<MoreIcon />} aria-label="More options" />
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {post.content}
        </p>
      </div>
      <div className="px-4 sm:px-5">
        <div className="relative h-[200px] w-full overflow-hidden rounded-xl sm:h-[240px] transition-transform hover:scale-[1.02]">
          <Image
            src={post.image}
            alt="Post media"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 pb-4 text-xs text-ink-soft sm:px-5">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 transition-all hover:scale-110 ${
              isLiked ? "text-danger" : ""
            }`}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <HeartIcon size={16} filled={isLiked} />
            <span className="font-medium">{likes}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 transition-all hover:scale-110 hover:text-accent"
            aria-label="View comments"
          >
            <CommentIcon size={16} />
            <span className="hidden sm:inline">{post.stats.comments} Comments</span>
            <span className="sm:hidden">{post.stats.comments}</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 transition-all hover:scale-110 hover:text-info"
            aria-label="Share"
          >
            <ShareIcon size={16} />
            <span className="hidden sm:inline">{post.stats.shares} Shares</span>
            <span className="sm:hidden">{post.stats.shares}</span>
          </button>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-1.5 transition-all hover:scale-110 ${
            isSaved ? "text-accent font-medium" : ""
          }`}
          aria-label={isSaved ? "Unsave" : "Save"}
        >
          <BookmarkIcon size={16} filled={isSaved} />
          <span>{saved} Saved</span>
        </button>
      </div>
      <div className="px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-muted px-3 py-2.5 transition-all focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 sm:gap-3 sm:px-4">
          <Avatar src="/images/avatars/avatar-1.svg" alt="User" size="xs" />
          <input
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-soft focus-visible:outline-none"
            placeholder="Write your comment..."
            aria-label="Write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={handleCommentSubmit}
          />
        </div>
      </div>
    </Card>
  );
}
