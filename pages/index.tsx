import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minha Consagração</title>
        <meta name="description" content="Minha Consagração Web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-bold underline">Welcome</h1>
      </main>
    </div>
  );
};

export default Home;
