import { userProfile } from "@/lib/mock-data";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";

export function ProfileCard() {
  return (
    <Card className="animate-fade-up p-4 sm:p-5">
      <div className="flex flex-col items-center gap-3 text-center">
        <Avatar
          src={userProfile.avatar}
          alt={userProfile.name}
          size="xl"
          ring
        />
        <div>
          <p className="text-base font-semibold text-accent">{userProfile.name}</p>
          <p className="text-xs font-medium text-ink-soft">
            {userProfile.role}
          </p>
        </div>
      </div>
      <div className="mt-4 space-y-2 sm:mt-5">
        <div className="flex items-center justify-between text-xs font-medium text-ink-soft">
          <span>{userProfile.completion}% Completed</span>
          <button className="text-accent transition hover:text-[#5a4af0]">
            Update profile
          </button>
        </div>
        <ProgressBar value={userProfile.completion} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
        <Button variant="secondary" size="sm" className="px-2">
          View Full Profile
        </Button>
        <Button variant="outline" size="sm" className="px-2">
          Share Profile
        </Button>
      </div>
    </Card>
  );
}
