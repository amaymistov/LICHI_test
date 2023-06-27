import Layout from "../components/Layout";
import '../styles/globals.scss'
import Head from "next/head";

const App = ({Component, pageProps}) => (
    <Layout>
        <Head>LICHI</Head>
        <main>
            <Component {...pageProps} />
        </main>
    </Layout>
);

export default App;
