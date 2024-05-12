import Link from "next/link";

export default function MainPageDetailsId({ posts }) {
    console.log(posts)
    return (
        <div className="p-20">
            <ul>
              <li>{posts.title}</li>
            </ul>
        </div>
    )
}


export async function getStaticProps(context) {
    const { params } = await context;
    const postId =await params.pid;

    let posts = [
        { id: "p1", title: 'items is bast create ' },
        { id: "p2", title: 'name is bast create ' },
        { id: "p3", title: 'products is bast create ' },
        { id: "p4", title: 'conspte is bast create ' }
    ]

    const postsId =  posts.find(item => item.id === postId);


    return {
        props: {
            posts: postsId
        },
        revalidate: 20,
    }

}


export async function getStaticPaths() {

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