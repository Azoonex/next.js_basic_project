import { Inter } from "next/font/google";
import { dataProduct } from "@/data/dummy-backend";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {

  const { products } = props;

  return (
    <main className={`${inter.className}`}>
      <Head>
        <title>this is nextjs title</title>
        <meta name="descrption" content="next js bast frame work!"  />
      </Head>
      <h1 className="text-5xl">main create page Home</h1>
      <h4>SSG</h4>
      {products.map(i => (
        <div key={i.length + 1} className="flex gap-1 text-blue-700 cursor-pointer m-20">
          <Link href={`${i.id}`}>
            {i.title}
          </Link>

          <Link href={`${i.id}`}>
            {i.id}
          </Link>
        </div>
      ))}
    </main>
  );
}


export async function getStaticProps() {
  const data = dataProduct

  return {
    props: {
      products: data
    },
    revalidate: 300
  }
}


