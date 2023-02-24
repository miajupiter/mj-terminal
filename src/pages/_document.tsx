import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content={process.env.NEXT_PUBLIC_META_DESCRIPTION || 'mj-terminal description'}
          />
          <meta
            name="author"
            // content={config.meta && config.meta.author || 'mj-terminal-author'}
            content={process.env.NEXT_PUBLIC_META_AUTHOR || 'mj-terminal-author'}
          />
          <link
            rel="icon"
            type="image/png"
            href={process.env.NEXT_PUBLIC_FAVICON || '/assets/web-icon.png'}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
