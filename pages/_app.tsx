import "../styles/index.css";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>PERMA</title>
      </Head>
      <body style={{ backgroundColor: "#f7f7f7" }}>
        <main>
          <div
            className="grid grid-cols-1 p-8 h-full"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-center">
                  <div>
                    <Image src="/perma.png" width="272" height="58" />
                  </div>
                  <div className="ml-4">
                    <Image
                      src="/ball.png"
                      width="168"
                      height="152"
                      className="mt-4"
                    />
                  </div>
                </h2>
              </div>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/create-and-list-nft"><a>mint a new nft</a></Link>
            <Link href="/my-nfts"><a>My NFTs</a></Link>
            <Link href="/my-listed-nfts"><a>nfts i wish to sell</a></Link>

            <div className="grid grid-cols-1 md:grid-cols-3 ml-8 mr-8">
              <div></div>
              <Component {...pageProps} />
              <div></div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default MyApp;
