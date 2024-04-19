import { EventList } from "@/componentes";
import EventSearch from "@/componentes/event/event-search";
import { getFeaturedEvents } from "@/dummy-data"

export default function MianPageEvent() {
  const feauterEvents = getFeaturedEvents();

  return (
    <div className="bg-green-200 py-2 grid grid-cols-1 place-items-center">
      <EventSearch />
      <EventList item={feauterEvents} />
    </div>
  )
}
