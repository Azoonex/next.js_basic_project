import Link from "next/link"
import classes from './event-item.module.css'
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-icon";

function EventItem(props) {
    const { title, image, date, location, id } = props;

    console.log(title, image, date, location, id)

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    // const formattedAddress = location.replace(',', '/n');
    const expolerLink = `/events/${id}`;

    return <li>
        <img  width={100} src={'/' + image} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>
                        <DateIcon />
                        {humanReadableDate}
                        </time>
                </div>
                <div>
                    <address>
                        <AddressIcon />
                        {location}
                        </address>
                </div>
            </div>
            <div>
                <Link className={classes.link} href={expolerLink}>
                    <span>
                        <ArrowIcon />
                    </span>
                    Expolor Event</Link>
            </div>
        </div>
    </li>
}

export default EventItem