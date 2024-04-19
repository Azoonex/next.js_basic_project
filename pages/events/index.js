import { EventList } from "@/componentes";
import { getFeaturedEvents } from "@/dummy-data"

export default function MianPageEvent() {
  const feauterEvents = getFeaturedEvents();

  return (
    <div className="bg-red-300 py-2 grid grid-cols-1 place-items-center">
      <EventList item={feauterEvents} />
    </div>
  )
}
