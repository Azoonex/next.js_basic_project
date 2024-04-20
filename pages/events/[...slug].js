import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '@/dummy-data';

export default function EventidAll() {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if(!filterData){
    return <h2 style={{textAlign:"center",margin: "0 auto"}}>Loading...</h2>
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2020 || numYear < 2021 || numMonth < 1 || numMonth > 12){
    return <h2>Invalid filter,Please adjust you values!</h2>
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filterEvents || filterEvents.lenght === 0){
    return <h2>No Events found for the chose filter</h2>
  }

  return (
    <div>EventidAll</div>
  )
}
