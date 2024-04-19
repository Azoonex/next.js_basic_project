import { EventList } from "@/componentes";
import EventSearch from "@/componentes/event/event-search";
import { getFeaturedEvents } from "@/dummy-data"
import { useRouter } from "next/router";

export default function MianPageEvent() {
  const feauterEvents = getFeaturedEvents();
  const router = useRouter();
  
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath)
  }

  return (
    <div className="bg-green-200 py-2 grid grid-cols-1 place-items-center">
      <EventSearch onSreach={findEventHandler} />
      <EventList item={feauterEvents} />
    </div>
  )
}
