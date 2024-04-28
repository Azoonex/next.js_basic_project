import { dataProduct } from "@/data/dummy-backend"

export default function PorudctsMainPage(props) {
    const { product } = props;
    console.log(product)
    return (
        <div>MAIN PRODUCTS PAGE</div>
    )
}

export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.proid
    const product = dataProduct.find(p => p.id === productId);

    return {
        props :{
            products: product
        }
    }

}

