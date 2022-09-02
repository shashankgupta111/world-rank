import React from "react";
import CountryDetailsCard from "../../components/countryDetailsCard";
import Layout from "../../components/layout";
import myCountry from "../../components/constants/index.json";

const Country = ({ data }) => {
  return (
    <Layout>
      <CountryDetailsCard data={data} />
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { country: post.name.common },
  }));
 
  return { paths:[...paths,{params:{country:'Akhand Bharat'}}], fallback: false };
}

export async function getStaticProps({ params }) {
  let countryData
  if(params.country==='Akhand Bharat'){
      countryData=[myCountry]
  }
  else{
    const data = await fetch(
      `https://restcountries.com/v3.1/name/${params.country}`
    );
    countryData = await data.json();
  }
  return {
    props: {
      data: countryData.find((item) => item.name.common === params.country),
    },
  };
}
export default Country;
