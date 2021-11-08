import './Main.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ButtonsPanel from "../ButtonsPanel/ButtonsPanel";

function Main() {
  return (
    <>
      <Header
        modification="header_landing"
      >
        <ButtonsPanel/>
      </Header>

      <main className="content">
        <Promo/>
        <NavTab/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
        <Portfolio/>
      </main>

      <Footer/>
    </>
  );
}

export default Main;
