import Link from "next/link"
import classes from './event-item.module.css'
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-icon";
import Image from "next/image";
import Button from "../ui/button";

function EventItem(props) {
    const { title, image, date, location, id } = props;

    console.log(title, image, date, location, id)

    const humanReadableDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    // const formattedAddress = location.replace(',', '/n');
    const expolerLink = `/events/${id}`;

    return <li className={classes.li_container}>
        <div className={classes.img_con}>
            <Image className={classes.imgStyle} width={200} height={150} src={'/' + image} alt={title} />

        </div>

        <div className={classes.text_con}>
            <h2 className={classes.title}>{title}</h2>
            <time>
                <DateIcon />
                {humanReadableDate}
            </time>
            <address>
                <AddressIcon />
                {location}
            </address>
            <Button link={expolerLink}>
                Expoler Id
            </Button>
        </div>
    </li>
}

export default EventItem