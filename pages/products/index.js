import Link from "next/link"

export default function index(props) {
    const { products } = props
    return (
        <div className="">
            {products.map(i => <Link className="text-blue-300 hover:text-blue-600 block text-3xl" href={`products/${i.id}`}>{i.title}</Link>)}
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            products: [
                { id: "p1", title: 'products items is bast create ' },
                { id: "p2", title: 'products name is bast create ' },
                { id: "p3", title: 'products products is bast create ' },
                { id: "p4", title: 'products conspte is bast create ' }
            ]
        }
    }
}
