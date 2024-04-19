import Image from "next/image"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"

function Eventid(props) {
    const { title,
        date,
        address,
        image,
        descrption,
        imagAlt } = props

    return (
        <section>
            <nav>{title}</nav>
            <div className="">
                <Image src={"/" + image} width={100} height={100} alt={imagAlt} />
                <div>
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