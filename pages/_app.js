import Header from "@/componentes/layout/header";
import "@/styles/globals.css";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return <main>
    <Header />
    <Provider>w
      <Component {...pageProps} />
    </Provider>
  </main>;
}
