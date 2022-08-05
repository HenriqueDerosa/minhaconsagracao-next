import Button from "../button";

const Navbar = () => {
  return (
    <nav className="w-auto sm:w-96 flex flex-column sm:flex-row justify-between text-xs sm:text-sm">
      <Button type="link" href="#">
        Etapas
      </Button>
      <Button type="link" href="/prayers">
        Orações
      </Button>
      <Button type="link" href="#">
        Guia
      </Button>
      <Button type="button" href="#">
        Configurações
      </Button>
    </nav>
  );
};

export default Navbar;
