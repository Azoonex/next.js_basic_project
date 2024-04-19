import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router"


export default function PagePageEventDanmic() {
  const router = useRouter();
  const evenetId = router.query.eventId;
  const event = getEventById(evenetId)

  if(!event){
    return <h3>not found</h3>
  }

  return (
    <div>PagePageEventDanmic</div>
  )
}
