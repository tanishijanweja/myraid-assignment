import Image from "next/image";
import { suggestions } from "@/lib/mock-data";
import { Card } from "@/components/ui/card";
import { StarIcon } from "@/components/ui/icons";

export function RightRail() {
  const [promo, course] = suggestions;

  return (
    <div className="space-y-6">
      {promo ? (
        <Card className="animate-fade-up p-4">
          <p className="text-sm font-semibold text-ink">{promo.title}</p>
          <p className="mt-1 text-xs text-ink-soft">{promo.description}</p>
          <div className="mt-4 overflow-hidden rounded-soft">
            <Image
              src={promo.image}
              alt={promo.title}
              width={320}
              height={160}
              className="w-full object-cover"
            />
          </div>
        </Card>
      ) : null}

      {course ? (
        <Card className="animate-fade-up p-4">
          <p className="text-sm font-semibold text-accent">{course.title}</p>
          <p className="mt-1 text-xs text-ink-soft">{course.description}</p>
          <div className="mt-4 overflow-hidden rounded-soft">
            <Image
              src={course.image}
              alt="Suggestions"
              width={320}
              height={160}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-ink-soft">
            <div>
              <p className="text-xs font-semibold text-ink">
                {course.subtitle}
              </p>
              <p className="text-[11px] text-ink-soft">{course.author}</p>
            </div>
            <div className="flex items-center gap-1 text-warning">
              <StarIcon size={14} />
              <span className="text-ink">{course.rating}</span>
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
