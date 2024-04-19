import Image from "next/image"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import classes from './eventid.module.css'


function Eventid(props) {
    const { title,
        date,
        address,
        image,
        descrption,
        imagAlt } = props

    return (
        <section className={classes.container}>
            <nav>{title}</nav>
            <div>
                <Image src={"/" + image} width={120} height={120} alt={imagAlt} />
               
                    <div className={classes.contet_text}>
                        <h2>
                            <DateIcon />
                            {date}

                        </h2>
                        <h2>
                            <AddressIcon />
                            {address}
                        </h2>
                    </div>
            </div>
            <p>
                {descrption}
            </p>
        </section>
    )
}

export default Eventid