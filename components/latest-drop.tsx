import { getLatestDrops } from "@/content/drops"
import { DropCard } from "./drop-card"

export default function LatestDrops() {
  const latestDrops = getLatestDrops(4);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {latestDrops.map(drop => (
          <DropCard key={drop.id} drop={drop} />
        ))}
      </div>
    </div>
  )
}

