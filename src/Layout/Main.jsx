import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
