import { getLatestDrops } from "@/content/drops"
import { DropRow } from "./drop-card"

export default function LatestDrops() {
  const latest = getLatestDrops(4)

  return (
    <div className="border border-border bg-card/30 px-4">
      {latest.map(drop => (
        <DropRow key={drop.id} drop={drop} />
      ))}
    </div>
  )
}
