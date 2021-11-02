import React from "react";
import Menu from "../components/Menu";
import data from "../data/recipes.json";

const Home = () => {
  return (
    <>
      <Menu recipes={data} title="Delicious Recipes" />
    </>
  );
};

export default Home;
