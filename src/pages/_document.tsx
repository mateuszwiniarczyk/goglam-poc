import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang='en'>
    <Head />
    <body className='overflow-x-hidden bg-gray-50 antialiased'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
