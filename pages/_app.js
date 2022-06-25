import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { Provider } from 'next-auth/client'
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>
          EDEN Brasil | Celeiros Brasileiros
        </title>
        <meta
          name="description"
          content="E-commerce store built with Next.js and Stripe checkout"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

      </Head>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </Provider>
  );
}

export default MyApp;
