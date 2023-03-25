import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang='en'>
    <Head />
    <body className='overflow-x-hidden bg-gray-100 antialiased'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
