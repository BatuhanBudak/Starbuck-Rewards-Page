import type { NextPage } from "next";
import MainPage from "../components/MainPage";
import Header from "../components/Header/Header";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainPage />
      <div className="page-overlay"></div>
    </>
  );
};

export default Home;
