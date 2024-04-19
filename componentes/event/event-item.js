import Link from "next/link"

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
        <img src={'/' + image} alt={title} />
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <address>{location}</address>
                </div>
            </div>
            <div>
                <Link href={expolerLink}>Expolor Event</Link>
            </div>
        </div>
    </li>
}

export default EventItem