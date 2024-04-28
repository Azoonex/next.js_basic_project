import Head from "next/head";

export const headeTitle = (title, caption) => {
    return <Head>
        <title>{title}</title>
        <meta name="descrption" content={caption} />
    </Head>
}