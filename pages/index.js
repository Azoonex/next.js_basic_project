import { Inter } from "next/font/google";
import fs from "fs/promises"
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {product} = props;
  // product maping and fetchin for ssg
  return (
    <main className={`${inter.className}`}>
      <h1 className="text-5xl">main create page Home</h1>
    </main>
  );
}

export async function getStaticProps () {
  const filePath = path.join(process.cwd(),'data','dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData)

  return {
    props: {
      product: [
        {id: 1,title: 'lab top'},
        {id: 2,title: 'phone'},
      ]
    }
  }
}
