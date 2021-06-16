import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/pgrabovets/json-view@master/dist/jsonview.bundle.css"
          />
          <script src="https://cdn.jsdelivr.net/gh/pgrabovets/json-view@master/dist/jsonview.bundle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
