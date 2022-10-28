import Banner from "../components/Banner";
import AppContainer from "../components/ItemContainer";
import { UserLayout } from "../components/UserLayout";

export const Home = () => {
  return (
    <>
      <Banner
        promocion="ÚNETE AL CLUB Y CONSIGUE UN 15% DE DESCUENTO"
        boton="registrate"
        onClick={() => console.log("click en registrate")}
      />
      <main className="content">
        <AppContainer />
      </main>
      <Banner
        promocion="ÚNETE AL CLUB Y CONSIGUE UN 35% DE DESCUENTO"
        boton="unete"
        onClick={() => console.log("click en unete")}
      />
    </>
  );
};
