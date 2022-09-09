import type { NextPage } from "next";
import MainPage from "../components/MainPage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
      <div className="page-overlay"></div>
    </>
  );
};

export default Home;
