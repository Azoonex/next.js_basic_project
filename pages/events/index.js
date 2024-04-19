import { EventList } from "@/componentes";
import { getFeaturedEvents } from "@/dummy-data"

export default function MianPageEvent() {
  const feauterEvents = getFeaturedEvents();

  return (
    <div>
      <EventList item={feauterEvents} />
    </div>
  )
}
