import { getallEventsData } from "@/hellper/api-utils"

export default function PorudctsMainPage(props) {
    const {products} = props;
    console.log(products)
    return (
        <div>MAIN PRODUCTS PAGE</div>
    )
}

export async function (){
    const featureEvents = getallEventsData()

    return {
        props:{
            products: featureEvents
        }
    }
}