import { posts } from "@/lib/mock-data";
import { AnalyticsMiniCard } from "@/components/feed/analytics-mini-card";
import { PostCard } from "@/components/feed/post-card";
import { PostComposer } from "@/components/feed/post-composer";
import { ProfileCard } from "@/components/feed/profile-card";
import { RightRail } from "@/components/feed/right-rail";
import { SuggestedStories } from "@/components/feed/suggested-stories";

export default function HomePage() {
  return (
    <section className="grid gap-4 sm:gap-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
      {/* Left sidebar - hidden on mobile, visible on tablet+ */}
      <aside className="order-2 hidden space-y-4 sm:space-y-6 md:order-1 md:block">
        <ProfileCard />
        <AnalyticsMiniCard />
        <SuggestedStories />
      </aside>

      {/* Main feed - always visible, order 1 on mobile */}
      <div className="order-1 space-y-4 sm:space-y-6 md:order-2">
        <PostComposer />
        <div className="space-y-4 sm:space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Right sidebar - hidden on mobile/tablet, visible on large screens */}
      <aside className="order-3 hidden space-y-6 lg:block">
        <RightRail />
      </aside>
    </section>
  );
}
