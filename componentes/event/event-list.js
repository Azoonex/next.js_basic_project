import EventItem from "./event-item"

function EventList (props) {
    const {item} = props
    return <ul>
        {item.map((items) => <EventItem 
            key={items.id}
            id={items.id}
            title={items.title}
            location={items.location}
            date={items.date}
            image={items.image}
        />)}
    </ul>
}

export default EventList