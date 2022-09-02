import React from "react";
import CountryDetailsCard from "../../components/countryDetailsCard";
import Layout from "../../components/layout";

const Country = ({ data }) => {
  return (
    <Layout>
      <CountryDetailsCard data={data[0]} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { country: post.name.common },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${params.country}`
  );
  const countryData = await data.json();
  return {
    props: {
      data: countryData,
    },
  };
}
export default Country;
