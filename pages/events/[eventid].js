import Eventid from "@/componentes/event/eventidcontent";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"


export default function PagePageEventDanmic() {
  const router = useRouter();
  const evenetId = router.query.eventid;
  const event = getEventById(evenetId)
  

  if(!event){
    return <h3>not found</h3>
  }

  return (
    <Eventid descrption={event.description} title={event.title} date={event.date} address={event.location} image={event.image} imagAlt={event.title} />
  )
}
