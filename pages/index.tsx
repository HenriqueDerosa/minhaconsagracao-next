import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Minha Consagração</title>
      </Head>

      <header className="bg-violet-800 text-slate-200">
        <div className="p-5 text-center">
          <h1 className="text-3xl">Minha Consagração</h1>
          <p className="p-2 font-light m-auto w-7/12">
            Auxílio para a preparação e vivência da Consagração segundo o método
            de São Luis Maria Grignion de Montfort
          </p>
        </div>
      </header>
      <main className="m-6">
        <p>Olá,</p>
        <p>Bem vindo</p>
      </main>
    </div>
  );
};

export default Home;
