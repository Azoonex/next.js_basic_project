import { dataProduct } from "@/data/dummy-backend";


export default function ProdcutsId(props) {
    const { products } = props;

    if(!products){
        return {notfound : true}
    }
    // product maping and fetchin for ssg
    return (
        <main className={`${inter.className}`}>
            <h1 className="text-5xl">main create page Home</h1>
            <ul className="">
                {products.map(i => {
                    return <li className="">{i}</li>
                })}
            </ul>
        </main>
    );
}



export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;

    const product = dataProduct.find(p => p.id === productId);

    return {
        props: {
            products: product
        },
    };
}

export async function getStaticPaths() {
    const data = await dataProduct;
    const pId = data.map(p => p.id)
    const params = pId.map(i => ({ params: { i } })) // create obj send paramse in paths



    return {
        paths: params,
        fallback: false
    }
}
