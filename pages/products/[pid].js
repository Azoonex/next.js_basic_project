
export default function ({ product }) {
    return (
        <div key={product.id}>{product.title}</div>
    )
}


export async function getStaticProps(context) {
    const { params } = context;
    const productId = params.pid;


    let posts = [
        { id: "p1", title: 'propct items is bast create ' },
        { id: "p2", title: 'propct name is bast create ' },
        { id: "p3", title: 'propct products is bast create ' },
        { id: "p4", title: 'propct conspte is bast create ' }
    ]

    const data = posts.find(i => i.id === productId)

    return {
        props: {
            product: data
        },
        revalidate: 20
    }


}

export async function getStaticPaths() {
    let posts = [
        { id: "p1", title: 'propct items is bast create ' },
        { id: "p2", title: 'propct name is bast create ' },
        { id: "p3", title: 'propct products is bast create ' },
        { id: "p4", title: 'propct conspte is bast create ' }
    ]

    const paramse = posts.map(i => i.id)

    console.log(paramse)


    return {
        paths: [
            { params: { pid: "p1" } },
            { params: { pid: "p2" } },
            { params: { pid: "p3" } },
            { params: { pid: "p4" } },
        ],
        fallback: false,
    }
}