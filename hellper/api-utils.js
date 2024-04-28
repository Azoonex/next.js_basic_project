export async function getAllEvents (){
    const resposve = await fetch(`https://nextpo-6a8c4-default-rtdb.firebaseio.com/evet.json`);
    const data = await resposve.json();

    const events = []

    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events
}


export function getallEventsData() {
    const allEvnets = getAllEvents();

    return allEvnets
}