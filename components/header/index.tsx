import { useRouter } from "next/router";
import Logo from "~/assets/icons/logo.svg";
import Navbar from "../navbar";

const Header = () => {
  const route = useRouter();

  console.log({ route });

  return (
    <header className="bg-violet-800 text-slate-200 relative flex flex-row justify-start">
      <Logo className="m-4 hidden sm:block" width={50} />
      <div className="p-5 flex flex-col gap-y-4">
        <input
          type="text"
          placeholder="Pesquisar"
          className="text-gray-200 bg-violet-900 w-full sm:w-96 "
        />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
