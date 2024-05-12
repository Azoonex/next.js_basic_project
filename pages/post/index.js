import { dataProduct } from "@/data/dummy-backend"
import Link from "next/link"

export default function PagePostMain(
    {posts}
) 
{
    console.log(posts)
    return (
        <div className="p-20">
            <ul>
                {
                    posts.map((items)=>(
                        <Link key={items.id} href={`/post/${items.id}`}>
                            <li className="text-2xl text-blue-500 hover:text-blue-300">{items.title}</li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )
}


export async function getStaticProps() {

    return {
        props: {
            posts: [
                { id: "p1", title: 'items is bast create ' },
                { id: "p2", title: 'name is bast create ' },
                { id: "p3", title: 'products is bast create ' },
                { id: "p4", title: 'conspte is bast create ' }
            ]
        }
    }
}