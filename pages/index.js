import CountryTable from "../components/CountryTable";
import classes from "../styles/Home.module.css";
import React from "react";
import Layout from "../components/layout";

export default function Home({ data = [] }) {
  return (
    <Layout>
      <div className={classes.container}>
        <CountryTable countrydata={data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const country = await fetch("https://restcountries.com/v3.1/all");
  const data = await country.json();
  return {
    props: {
      data,
    },
  };
}
