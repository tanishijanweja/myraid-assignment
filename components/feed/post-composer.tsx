"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { PaperclipIcon, PlusIcon, SendIcon } from "@/components/ui/icons";

export function PostComposer() {
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (content.trim() || imagePreview) {
      console.log("Post submitted:", { content, imagePreview });
      // Reset form
      setContent("");
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Create a Post</p>
        <IconButton icon={<PlusIcon size={16} />} aria-label="Create" />
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:mt-4">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-soft px-3 py-2.5 transition-all focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/20 sm:gap-3 sm:px-4">
          <Avatar src="/images/avatars/avatar-1.svg" alt="User" size="sm" />
          <input
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-soft focus-visible:outline-none"
            placeholder="What's on your mind?"
            aria-label="Post input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <div className="flex items-center gap-1 text-ink-soft sm:gap-2">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
            <IconButton
              icon={<PaperclipIcon size={16} />}
              aria-label="Attach image"
              onClick={() => fileInputRef.current?.click()}
            />
            <IconButton
              icon={<SendIcon size={16} />}
              aria-label="Send"
              onClick={handleSubmit}
            />
          </div>
        </div>
        {imagePreview && (
          <div className="relative h-[160px] overflow-hidden rounded-lg border border-border sm:h-[200px]">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
            <button
              onClick={removeImage}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-ink/80 text-white transition-all hover:bg-ink hover:scale-110"
              aria-label="Remove image"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </Card>
  );
}
