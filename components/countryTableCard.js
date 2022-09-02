import Link from "next/link";
import React, { useState } from "react";
import classes from "../styles/card.module.css";
import Loader from "./loader";

export default function CountryTableCard({ country, index }) {
  const [showLoader, setShowLoader] = useState(false);
  const loader = () => {
    setShowLoader(true);
  };
  return (
    <>
      <Link href={`./countries/${country.name.common}`}>
        <div className={classes.card} onClick={loader}>
          <p>{index}</p>
          <p>{country.name.common}</p>
          <p>{country.population}</p>
          <p>{country.area}</p>
          <p>{country.gini && Object.values(country.gini)[0]}</p>
        </div>
      </Link>
      {showLoader && <Loader />}
    </>
  );
}
