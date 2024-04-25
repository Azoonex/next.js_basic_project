import { dataProduct } from "@/data/dummy-backend"

function ProductsDetailPage(props) {

    const {loadedProduct} = props

    return <>
        <h1>{loadedProduct.id}</h1>
        <p>{loadedProduct.description}</p>
    </>
}

export default ProductsDetailPage

export async function getStaticProps(context){
    const {params} = context;
    const productId = params.pid;

    const product = dataProduct.find(p => p.id === productId)

    return {
        props: {
            loadedProduct: product
        }
    }

}