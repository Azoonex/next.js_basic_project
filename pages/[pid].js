import { dataProduct } from "@/data/dummy-backend"

function ProductsDetailPage(props) {

    const {loadedProduct} = props;


    // fallback coruse 185 //TODO:
    if(!loadedProduct){
        return <h1>Loadding ...</h1>
    }

    return <>
        <h1>{loadedProduct.id}</h1>
        <p>{loadedProduct.description}</p>
    </>
}

export default ProductsDetailPage

export async function getStaticProps(context){
    const {params} = context;
    const productId = params.pid;

    const product = dataProduct.find(p => p.id === productId) // => obj for finding and sending in props checked const productId = params.pid //IMPORTANT// UNDERSTAEN NEXT FORE PAGE SSG PRODUCT ID
   

    return {
        props: {
            loadedProduct: product
        },
        revalidate : 10,
    }

}

export async function getStaticPaths(){

    return{
        paths: [
            {params : {pid: "p1"}},
            {params : {pid: "p2"}},
            {params : {pid: "p3"}},
            {params : {pid: "p4"}},
        ],
        fallback: false,
    }
    
}