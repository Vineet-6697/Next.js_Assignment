import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta name="author" content="ABC"/>
            </Head>
            <body className="bg-success bg-opacity-10">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}