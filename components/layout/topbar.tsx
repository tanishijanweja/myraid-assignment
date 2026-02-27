"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { BellIcon, MessageIcon, SearchIcon } from "@/components/ui/icons";

type SearchResult = {
  id: string;
  type: "user" | "job" | "company";
  title: string;
  subtitle?: string;
  avatar?: string;
};

type Notification = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
};

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    type: "user",
    title: "Pan Feng Shui",
    subtitle: "Product Manager",
    avatar: "/images/avatars/avatar-5.svg",
  },
  {
    id: "2",
    type: "user",
    title: "Clara Kim",
    subtitle: "UX Researcher",
    avatar: "/images/avatars/avatar-6.svg",
  },
  {
    id: "3",
    type: "job",
    title: "Jr. Front-end Developer",
    subtitle: "Microsoft",
  },
  {
    id: "4",
    type: "company",
    title: "Google",
    subtitle: "Technology Company",
  },
];

const initialNotifications: Notification[] = [
  {
    id: "1",
    title: "New Job Match",
    message: "Senior UI Designer at Meta matches your profile",
    time: "5 min ago",
    read: false,
    avatar: "/images/logos/meta.svg",
  },
  {
    id: "2",
    title: "Interview Scheduled",
    message: "Google has scheduled an interview for tomorrow",
    time: "1 hour ago",
    read: false,
    avatar: "/images/logos/google.svg",
  },
  {
    id: "3",
    title: "Profile View",
    message: "Pan Feng Shui viewed your profile",
    time: "3 hours ago",
    read: true,
    avatar: "/images/avatars/avatar-5.svg",
  },
  {
    id: "4",
    title: "Application Update",
    message: "Your application at Microsoft is under review",
    time: "1 day ago",
    read: true,
    avatar: "/images/logos/microsoft.svg",
  },
];

export function Topbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchQuery.trim()
    ? mockSearchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-panel border border-border bg-surface px-3 py-3 shadow-sm sm:gap-4 sm:px-6 sm:py-4 animate-slide-in-down">
      <div className="hidden min-w-[120px] lg:block" aria-hidden />
      <div className="relative flex w-full flex-1 items-center justify-center lg:w-auto" ref={searchRef}>
        <Input
          className="w-full max-w-[460px]"
          placeholder="Search"
          aria-label="Search"
          trailingIcon={<SearchIcon />}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => searchQuery && setShowResults(true)}
        />
        {showResults && filteredResults.length > 0 && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full max-w-[460px] rounded-xl border border-border bg-white shadow-lg z-50 overflow-hidden animate-scale-in">
            {filteredResults.map((result) => (
              <button
                key={result.id}
                onClick={() => {
                  setSearchQuery("");
                  setShowResults(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-muted"
              >
                {result.avatar ? (
                  <Avatar src={result.avatar} alt={result.title} size="sm" />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-semibold">
                    {result.title[0]}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-ink truncate">
                    {result.title}
                  </p>
                  {result.subtitle && (
                    <p className="text-xs text-ink-soft truncate">
                      {result.subtitle}
                    </p>
                  )}
                </div>
                <span className="text-xs text-ink-soft capitalize">
                  {result.type}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <IconButton
          aria-label="Messages"
          icon={<MessageIcon size={18} />}
          className="border border-border bg-surface transition-all hover:scale-110 hover:border-accent/40"
        />
        <div className="relative" ref={notificationRef}>
          <IconButton
            aria-label="Notifications"
            icon={<BellIcon size={18} />}
            className="border border-border bg-surface transition-all hover:scale-110 hover:border-accent/40"
            onClick={() => setShowNotifications(!showNotifications)}
          />
          {unreadCount > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-danger text-[9px] font-bold text-white">
              {unreadCount}
            </span>
          )}
          {showNotifications && (
            <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-border bg-white shadow-lg z-50 overflow-hidden animate-scale-in">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <h3 className="text-sm font-semibold text-ink">
                  Notifications
                </h3>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              <div className="max-h-96 overflow-y-auto scrollbar-muted">
                {notifications.map((notification) => (
                  <button
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`w-full flex gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-muted ${
                      !notification.read ? "bg-accent/5" : ""
                    }`}
                  >
                    {notification.avatar && (
                      <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                        <Avatar
                          src={notification.avatar}
                          alt={notification.title}
                          size="sm"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs font-semibold text-ink">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-xs text-ink-soft mt-0.5 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-ink-soft mt-1">
                        {notification.time}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <Avatar
          src="/images/avatars/avatar-1.svg"
          alt="Profile"
          size="sm"
          ring
        />
      </div>
    </div>
  );
}
