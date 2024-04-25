import Header from "@/componentes/layout/header";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return <main>
    <Header />
      <Component {...pageProps} />
  </main>;
}
