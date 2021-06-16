import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Sensor Stream | Jecsham Castillo" />
          <meta
            name="description"
            content="Sensor Stream allows you to stream sensor data of pc components like gpu, cpu, ram, storage, etc, of your PC through UDP datagrams or WebSockets."
          />
          <meta name="keywords" content="sensor stream, hardware monitor" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <link rel="icon" href="/favicon.ico" />
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
