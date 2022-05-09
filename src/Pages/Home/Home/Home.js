import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import MyLocation from "../../MyLocation/MyLocation";

const Home = () => {
  return (
    <>
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
      <MyLocation></MyLocation>
    </>
  );
};

export default Home;
