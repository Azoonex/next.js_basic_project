import EventItem from "./event-item"
import classes from './event-list.module.css'

function EventList (props) {
    const {item} = props
    return <ul className={classes.ulitems}>
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