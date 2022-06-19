import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="pablosilvadev" />
                    <meta name="keywords" content="pablosilvadev " />
                    <meta name="author" content="pablosilvadev" />
                    <meta name="author" content="pablosilvadev" />
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&display=optional" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}