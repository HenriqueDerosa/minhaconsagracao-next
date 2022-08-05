import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minha Consagração</title>
      </Head>
      <main className="m-6">
        <p>Olá,</p>
        <p>Bem vindo</p>
      </main>
    </div>
  );
};

export default Home;
