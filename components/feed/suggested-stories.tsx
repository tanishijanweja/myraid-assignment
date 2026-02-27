import { stories } from "@/lib/mock-data";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageIcon } from "@/components/ui/icons";

export function SuggestedStories() {
  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Sosmed Stories</p>
        <button className="text-xs font-semibold text-accent hover:text-accent/80">See all</button>
      </div>
      <div className="mt-4 space-y-3 sm:space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="flex items-center gap-2 sm:gap-3">
            <Avatar src={story.avatar} alt={story.name} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-ink">{story.name}</p>
              <p className="truncate text-[11px] text-ink-soft">{story.title}</p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <Button variant="secondary" size="sm" className="h-8 px-2.5 text-xs sm:px-3">
                Follow
              </Button>
              <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-ink-muted transition hover:border-accent/30 hover:text-accent">
                <MessageIcon size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
